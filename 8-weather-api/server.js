const express = require('express');
const https = require('https');

const app = express();
const APPID = '622895359404ccf3308b0f539b5ed718';

const geocodingApi = (city) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APPID}`;

const weatherDataApi = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`;

app.get('/', (req, res) => {
  https.get(geocodingApi('lahore'), (geocodingRes) => {
    geocodingRes.on('data', (data) => {
      const jsonData = JSON.parse(data)[0];
      const { lat, lon } = jsonData;

      https.get(weatherDataApi(lat, lon), (weatherDataRes) => {
        weatherDataRes.on('data', (data) => {
          const jsonData = JSON.parse(data);
          res.send(jsonData.main.temp.toString());
        });
      });
    });
  });
});

app.listen(3000);
