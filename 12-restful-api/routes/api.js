const express = require('express');

const v1Router = require('./v1/v1');

const router = express.Router();

router.get('/', (req, res) => {
  const status = 403;
  res.status(status).json({
    status,
    error: 'api_version',
    message: 'api version not specified',
  });
});

router.use('/v1', v1Router);

module.exports = router;
