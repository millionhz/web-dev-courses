const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res, next) => {
  User.addUser(req.body.email, req.body.password)
    .then(() => {
      res.render('secret');
    })
    .catch((err) => {
      res.redirect('/register');
      next(err);
    });
});

module.exports = router;
