const db = require('../db')

module.exports = db.defineModel('pets', {
  name: db.STRING(100)
})
