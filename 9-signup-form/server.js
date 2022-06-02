const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const signupPage = path.join(__dirname, 'public', 'signup.html');

app.get('/', (req, res) => {
  res.sendFile(signupPage);
});

app.listen(3000);
