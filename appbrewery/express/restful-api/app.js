const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use(errorMiddleware);

mongoose
  .connect(process.env.DB)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Database connection failed');
    console.log(err);
    mongoose.disconnect();
  });
