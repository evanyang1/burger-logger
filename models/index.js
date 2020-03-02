const User = require('./User.js')
const Item = require('./Item.js')

User.hasMany(Item)
Item.belongsTo(User)

module.exports = { User, Item }
