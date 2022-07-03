const express = require('express');
const { ensureLoggedIn } = require('connect-ensure-login');

const router = new express.Router();

router.get('/', ensureLoggedIn('/login'), (req, res) => {
  res.render('secrets');
});

module.exports = router;
