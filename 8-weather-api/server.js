const express = require('express');
const https = require('https');

const app = express();
const APPID = '622895359404ccf3308b0f539b5ed718';
const TIMEOUT = 10000;

const geocodingApi = (city) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APPID}`;

const weatherDataApi = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`;

function getWeatherData(lat, lon) {
  return new Promise(
    (resolve) => {
      https.get(weatherDataApi(lat, lon), (response) => {
        response.on('data', (data) => {
          resolve(JSON.parse(data));
        });
      });
    },
    (reject) => {
      setTimeout(reject, TIMEOUT);
    }
  );
}

app.get('/', (req, res) => {
  https.get(geocodingApi('lahore'), (geocodingRes) => {
    geocodingRes.on('data', (data) => {
      const jsonData = JSON.parse(data)[0];
      const { lat, lon } = jsonData;

      getWeatherData(lat, lon)
        .then((val) => {
          res.send(val);
        })
        .catch(() => {
          res.sendStatus(500);
        });
    });
  });
});

app.listen(3000);
