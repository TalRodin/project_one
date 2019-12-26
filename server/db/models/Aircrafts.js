const Sequelize = require('sequelize');
const db = require('../_db');

// -----Table Aircrafts-----
const Aircrafts=db.define('aircrafts',{
    make:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
    },
    model:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
    },
    year:{
        type: Sequelize.DATEONLY,
        validate:{
            isAfter: "1902-12-31", 
        },
        get: function()  {
              return this.getDataValue('year');
            }
      
    },
    type:{
        type: Sequelize.STRING,
        validate:{
            isIn: [['Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue']]
        }
    },
    cost:{
        type: Sequelize.DECIMAL,
        get: function(){
            return (this.getDataValue('cost')*1000000)
        }
    },
    imageUrl:{
        type: Sequelize.TEXT,
        defaultValue: '',
        validate: {
            isUrl: true
          }
    },
    description:{
        type: Sequelize.TEXT
    }
})

Aircrafts.getAircraftByType = function(AircraftType){
    return Aircrafts.findAll({
        where:{
            type: AircraftType
        }
    })
}

// -----Table Aircrafts-----
module.exports = Aircrafts;
