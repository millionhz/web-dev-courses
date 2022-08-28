const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.redirect('/bmi');
});

app.get('/bmi', (request, response) => {
  response.sendFile(path.join(__dirname, 'bmi.html'));
});

app.post('/bmi', (request, response) => {
  const weight = parseFloat(request.body.weight);
  const height = parseFloat(request.body.height);
  const bmi = weight / height ** 2;

  response.send(`<h1>Your BMI is ${bmi}</h1>`);
});

app.listen(port);
