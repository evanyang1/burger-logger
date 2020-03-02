const { Model, STRING, BOOLEAN } = require('sequelize')
const sequelize = require('../config')

class Item extends Model { }

Item.init({
  item: {
    type: STRING,
    allowNull: false
  },
  isDone: {
    type: BOOLEAN
  }
}, { sequelize, modelName: 'item' })

module.exports = Item
