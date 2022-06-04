const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const todoItems = [];

function getDate() {
  const date = new Date();
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

app.get('/', (req, res) => {
  res.render('todo-list', {
    date: getDate(),
    todoItems,
  });
});

app.post('/', (req, res) => {
  const { newTodoItem } = req.body;
  if (newTodoItem) {
    todoItems.push(req.body.newTodoItem);
  }

  res.redirect('/');
});

app.listen(process.env.PORT);
