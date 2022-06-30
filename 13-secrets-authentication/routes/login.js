const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

  User.authenticate(email, password)
    .then(() => {
      res.render('secrets');
    })
    .catch((err) => {
      res.redirect('/login');
      next(err);
    });
});

module.exports = router;
