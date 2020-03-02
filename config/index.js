const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/todo_db')

module.exports = sequelize
