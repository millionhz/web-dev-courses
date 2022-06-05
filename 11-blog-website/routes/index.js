const express = require('express');

const journal = require('../models/data');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { journal });
});

module.exports = router;
