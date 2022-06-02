const express = require('express');
const https = require('https');
const http = require('http');

const app = express();
const APPID = '622895359404ccf3308b0f539b5ed718';
const TIMEOUT = 10000;

const ipApi = (ipAddr) => `http://ip-api.com/json/${ipAddr}?fields=lat,lon`;

const weatherDataApi = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`;

function getWeatherData(lat, lon) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, TIMEOUT);

    const request = https.get(weatherDataApi(lat, lon), (response) => {
      response.on('data', (data) => {
        resolve(JSON.parse(data));
      });
    });

    request.on('error', () => reject());
  });
}

function getGeolocation(ipAddr) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, TIMEOUT);

    const request = http.get(ipApi(ipAddr), (response) => {
      response.on('data', (data) => {
        const parsedData = JSON.parse(data);
        resolve([parsedData.lat, parsedData.lon]);
      });
    });

    request.on('error', () => {
      reject();
    });
  });
}

function getWeather(ipAddr) {
  return new Promise((resolve, reject) => {
    getGeolocation(ipAddr)
      .then((val) => {
        const [lat, lon] = val;

        return getWeatherData(lat, lon);
      })
      .then((val) => {
        resolve(val);
      })
      .catch(() => {
        reject();
      });
  });
}

app.get('/', (request, response) => {
  const ipAddr = request.headers['x-forwarded-for'];
  getWeather(ipAddr)
    .then((val) => {
      response.send(val);
    })
    .catch(() => {
      response.sendStatus(500);
    });
});

app.listen(process.env.PORT);
