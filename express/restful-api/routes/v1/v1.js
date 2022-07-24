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

router
  .route('/articles')
  .get((req, res) => {
    Article.getArticles().then((articles) => {
      res.json(articles);
    });
  })
  .post((req, res) => {
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

router
  .route('/articles/:title')
  .get((req, res) => {
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
  })
  .patch((req, res) => {
    Article.updateArticleByTitle(req.params.title, req.body)
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
  })
  .delete((req, res) => {
    Article.deleteArticleByTitle(req.params.title).then(() => {
      res.sendStatus(200);
    });
  });

module.exports = router;
