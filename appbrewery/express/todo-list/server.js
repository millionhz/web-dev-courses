const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { capitalize } = require('lodash');

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

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  items: {
    type: [itemSchema],
  },
});

const List = mongoose.model('list', listSchema);

const defaults = [
  { item: 'Welcome to your new Todolist' },
  { item: 'Hit the + button to add items' },
];

function instantiateList(name) {
  const newList = new List({
    name,
    items: defaults,
  });

  return newList.save();
}

async function getItems(name) {
  const list = await List.findOne({ name });

  if (list) {
    return Promise.resolve(list.items);
  }

  const newList = await instantiateList(name);
  return newList.items;
}

async function insertItem(name, item) {
  const list = await List.findOne({ name });

  list.items.push({
    item,
  });

  return list.save();
}

async function deleteItem(name, _id) {
  const list = await List.findOne({ name });
  list.items.id(_id).remove();
  return list.save();
}

app.get('/', (req, res) => {
  res.redirect('/primary');
});

app.get('/:category', (req, res) => {
  const name = req.params.category;

  getItems(name)
    .then((items) => {
      res.render('todo-list', {
        title: capitalize(name),
        name,
        todoItems: items,
      });
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.post('/:category', (req, res) => {
  const { newTodoItem } = req.body;
  const name = req.params.category;

  insertItem(name, newTodoItem).then(() => {
    res.redirect(`/${name}`);
  });
});

app.post('/:category/delete', (req, res) => {
  const name = req.params.category;
  const { id } = req.body;

  deleteItem(name, id).then(() => {
    res.redirect(`/${name}`);
  });
});

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log('database connection failed!');
    mongoose.disconnect();
  });
