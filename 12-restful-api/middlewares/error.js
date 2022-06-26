module.exports = (req, res) => {
  const status = 403;
  res.status(status).json({
    status,
    error: 'incorrect_route',
    message: 'incorrect route requested',
  });
};
