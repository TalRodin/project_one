const db = require('../_db')
const Aircrafts = require('../models/Aircrafts')
const Countries = require('../models/Countries')



Aircrafts.belongsTo(Countries)
Countries.hasMany(Aircrafts)



module.exports = {
  db,
  Aircrafts,
  Countries
}