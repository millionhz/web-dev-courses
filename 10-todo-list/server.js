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

async function instantiateList(name) {
  const newList = new List({
    name,
    items: defaults,
  });

  await newList.save();
  return newList.items;
}

async function getItems(name) {
  const list = (await List.find({ name }))[0];

  if (list) {
    return Promise.resolve(list.items);
  }

  return instantiateList(name);
}

async function insertItem(name, item) {
  const list = (await List.find({ name }))[0];

  list.items.push({
    item,
  });

  return list.save();
}

function deleteItem(_id) {
  return Item.deleteOne({ _id }).exec();
}

app.get('/', (req, res) => {
  res.redirect('/primary');
});

app.get('/:category', (req, res) => {
  const name = req.params.category;

  getItems(name)
    .then((items) => {
      res.render('todo-list', {
        title: name,
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
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log('database connection failed!');
    mongoose.disconnect();
  });
