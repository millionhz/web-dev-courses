const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./utils/auth');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const secretsRouter = require('./routes/secrets');

const app = express();
const mongoConnection = mongoose.connect(process.env.DB);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {},
    store: MongoStore.create({
      clientPromise: mongoConnection.then((self) =>
        self.connection.getClient()
      ),
    }),
  })
);

app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/secrets', secretsRouter);

mongoConnection
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('database connection failed');
    console.log(err);
    mongoose.disconnect();
  });
