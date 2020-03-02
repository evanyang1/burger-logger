const { Model, STRING } = require('sequelize')
const sequelize = require('../config')

class User extends Model { }

User.init({
  username: {
    type: STRING,
    allowNull: false,
    unique: true
  }
}, { sequelize, modelName: 'users' })

module.exports = User
