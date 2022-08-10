const Todo = require("../models/todo");

const todoUtils = require("../utils/todos");
exports.addTodo = async (req, res) => {
  if (!req.body.todo) return res.redirect("/");

  try {
    await Todo.create({ Text: req.body.todo });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }

  // Todo.create({
  //   Text: req.body.todo,
  // })
  //   .then((result) => {
  //     console.log(result);
  //     res.redirect("/");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // const todo = new Todo(todoUtils.generateRandomId(), req.body.todo);

  // todo.save((err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }

  // Todo.destroy({ where: { id: req.params.id } })
  //   .then((result) => {
  //     console.log(result);
  //     res.redirect("/");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // Todo.deleteTodo(req.params.id, (err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
};

exports.compltedTodo = async (req, res) => {
  try {
    const thisTodo = await Todo.findByPk(req.params.id);
    thisTodo.Completed = true;
    await thisTodo.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }

  // Todo.findByPk(req.params.id)
  //   .then((todo) => {
  //     console.log(todo);
  //     todo.Completed = true;
  //     return todo.save();
  //   })
  //   .then((result) => {
  //     console.log(result);
  //     res.redirect("/");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // Todo.completeTodo(req.params.id, (err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });
};
