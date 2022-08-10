const Todo = require("../models/todo");

//const todoUtils = require("../utils/todos");

exports.getIndex = async (req, res) => {
  // todoUtils.getCompletedTodos((compltedUtils) => {
  //   todoUtils.getRemainingTodos((remainingTodos) => {
  //     Todo.fetchAll((todos) => {
  //       res.render("index", {
  //         pageTitle: "کارهای روزمره",
  //         todos,
  //         compltedUtils,
  //         remainingTodos,
  //       });
  //     });
  //   });
  // });

  try {
    const allTodos = await Todo.findAll();
    const completedItems = await Todo.count({ where: { Completed: true } });
    res.render("index", {
      pageTitle: "کارهای روزمره",
      todos: allTodos,
      compltedUtils: completedItems,
      remainingTodos: allTodos.length - completedItems,
    });
  } catch (error) {}

  // Todo.findAll().then((todos) => {
  //   Todo.count({ where: { Completed: true } }).then((CompletedResult) => {
  //     res.render("index", {
  //       pageTitle: "کارهای روزمره",
  //       todos,
  //       compltedUtils: CompletedResult,
  //       remainingTodos: todos.length - CompletedResult,
  //     });
  //   });
  // });
};
