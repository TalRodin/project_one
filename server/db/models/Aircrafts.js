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
        type: Sequelize.DATE,
        validate:{
            isAfter: "1902-12-31", 
        }
    },
    type:{
        type: Sequelize.STRING,
        validate:{
            isIn: [['Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue']]
        }
    },
    cost:{
        type: Sequelize.DECIMAL(10, 6, 'int')
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
    return Aircrafts.findOne({
        where:{
            type: AircraftType
     }})
}

// Aircrafts.getMillion=function(){
//     return `${Aircrafts.cost*1000000}`
// }


// -----Table Aircrafts-----
module.exports = Aircrafts;