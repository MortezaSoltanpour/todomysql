const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_db", "root", "morTeza1!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
