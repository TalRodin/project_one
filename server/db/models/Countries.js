const Sequelize = require('sequelize');
const db = require('../_db');

const Countries = db.define('countries', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
      },
      GFI: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0.0,
            max: 10.0
        }
      },
      flagUrl: {
        type: Sequelize.TEXT,
        defaultValue: '',
        validate: {
            isUrl: true
          }
      }
})

Countries.getTopFive = function(){
    return Countries.findAll({order: [['GFI', 'ASC']], limit: 5})
}

module.exports = Countries;
