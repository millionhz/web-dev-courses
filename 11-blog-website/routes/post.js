const express = require('express');

const journal = require('../models/journal');

const router = express.Router();

router.get('/:title', (req, res, next) => {
  const post = journal.getPost(req.params.title);

  if (post) {
    res.render('post', { post });
  } else {
    next();
  }
});

module.exports = router;
