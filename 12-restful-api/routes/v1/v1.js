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

router.post('/articles', (req, res) => {
  Article.addArticle(req.body.title, req.body.content)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      const status = 400;
      res.status(400).json({
        status,
        error: 'validation_error',
        message: 'failed to insert',
      });
    });
});

router.get('/articles/:title', (req, res) => {
  Article.getArticleByTitle(req.params.title).then((article) => {
    if (article) {
      res.send(article);
    } else {
      const status = 404;
      res.status(status).json({
        status,
        error: 'article_not_found',
        message: 'requested article was not found',
      });
    }
  });
});

module.exports = router;
