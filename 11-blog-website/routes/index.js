const express = require('express');

const journal = require('../models/journal');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { posts: journal.posts });
});

module.exports = router;
