const Todo = require("../models/todo");

//const todoUtils = require("../utils/todos");

exports.getIndex = (req, res) => {
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

  Todo.findAll().then((todos) => {
    Todo.count({ where: { Completed: true } }).then((CompletedResult) => {
      res.render("index", {
        pageTitle: "کارهای روزمره",
        todos,
        compltedUtils: CompletedResult,
        remainingTodos: todos.length - CompletedResult,
      });
    });
  });
};
