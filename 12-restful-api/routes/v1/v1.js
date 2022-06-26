const express = require('express');
const Article = require('../../models/article');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 403,
    error: 'incorrect_endpoint',
    message: 'incorrect endpoint accessed',
  });
});

router.get('/articles', (req, res) => {
  Article.getArticles().then((articles) => {
    res.json(articles);
  });
});

module.exports = router;
