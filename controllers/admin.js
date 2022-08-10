const Todo = require("../models/todo");

const todoUtils = require("../utils/todos");
exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");

  Todo.create({
    Text: req.body.todo,
  })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

  // const todo = new Todo(todoUtils.generateRandomId(), req.body.todo);

  // todo.save((err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
};

exports.deleteTodo = (req, res) => {
  Todo.destroy({ where: { id: req.params.id } })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  // Todo.deleteTodo(req.params.id, (err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
};

exports.compltedTodo = (req, res) => {
  Todo.findByPk(req.params.id)
    .then((todo) => {
      console.log(todo);
      todo.Completed = true;
      return todo.save();
    })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

  // Todo.completeTodo(req.params.id, (err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
};
