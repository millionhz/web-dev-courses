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
  return new Promise((resolve, reject) => {
    setTimeout(reject, TIMEOUT);

    https.get(weatherDataApi(lat, lon), (response) => {
      response.on('data', (data) => {
        resolve(JSON.parse(data));
      });
    });
  });
}

function getGeoLocation(city) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, TIMEOUT);

    https.get(geocodingApi(city), (response) => {
      response.on('data', (data) => {
        resolve(JSON.parse(data));
      });
    });
  });
}

function getWeather(city) {
  return new Promise((resolve, reject) => {
    getGeoLocation(city)
      .then((val) => {
        const { lat, lon } = val[0];
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
  getWeather('lahore')
    .then((val) => {
      response.send(val);
    })
    .catch(() => {
      response.sendStatus(500);
    });
});

app.listen(3000);
