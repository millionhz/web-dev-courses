const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mongoURL = 'mongodb://127.0.0.1:27017/todolist';

const itemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: () => this.item !== '',
  },
});

const Item = mongoose.model('Item', itemSchema);

function getDate() {
  const date = new Date();
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

async function initDB() {
  Item.find({}).then((data) => {
    if (!data.length) {
      Item.insertMany([
        { item: 'Welcome to your todolist!' },
        { item: 'Hit the + button to add new item.' },
      ]);
    }
  });
}

async function getItems() {
  return Item.find({});
}

function insertItem(item) {
  return new Item({ item }).save();
}

function deleteItem(_id) {
  return Item.deleteOne({ _id });
}

app.get('/', (req, res) => {
  getItems()
    .then((items) => {
      res.render('todo-list', {
        date: getDate(),
        todoItems: items,
      });
    })
    .catch(() => {
      res.status(404).send('Database query failed');
    });
});

app.post('/', (req, res) => {
  const { newTodoItem } = req.body;
  insertItem(newTodoItem)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log('incorrect item');
    });
});

app.post('/delete', (req, res) => {
  const { id } = req.body;
  deleteItem(id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log('incorrect item');
    });
});

mongoose
  .connect(mongoURL)
  .then(() => {
    initDB();
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log('database connection failed!');
    mongoose.disconnect();
  });
