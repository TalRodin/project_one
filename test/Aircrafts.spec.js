const expect = require('chai').expect
const Promise = require('bluebird');
const db = require('../server/db/_db')
const Aircrafts = require('../server/db/models/Aircrafts.js')
const Sequelize = require('sequelize');

describe('Aircrafts', function(){
    before(() => {
        return db.sync({force: true})
    });

    afterEach(() => {
        return db.sync({force: true})
    });

    describe('Class methods', function(){
        beforeEach(async() => {
            await Promise.all([
                Aircrafts.create({make: 'Country1', model: 'A1', year: '2019-12-31', type: 'Attack', cost: '1.1', imageUrl: 'https://en.wikipedia.org/wiki/Aircraft#/media/File:Collection_of_military_aircraft.jpg', description: 'AircraftDescription1'}),
                Aircrafts.create({make: 'Country2', model: 'A2', year: '2019-12-31', type: 'Versatile', cost: '2.1', imageUrl: 'https://en.wikipedia.org/wiki/Aircraft#/media/File:Collection_of_military_aircraft.jpg', description: 'AircraftDescription2'}),
                Aircrafts.create({make: 'Country3', model: 'A3', year: '2019-12-31', type: 'Bomber', cost: '3.1', imageUrl: 'https://en.wikipedia.org/wiki/Aircraft#/media/File:Collection_of_military_aircraft.jpg', description: 'AircraftDescription3'}),
                Aircrafts.create({make: 'Country4', model: 'A4', year: '2019-12-31', type: 'Attack', cost: '4.1', imageUrl: 'https://en.wikipedia.org/wiki/Aircraft#/media/File:Collection_of_military_aircraft.jpg', description: 'AircraftDescription4'}),
                Aircrafts.create({make: 'Country5', model: 'A5', year: '2019-12-31', type: 'Transport', cost: '5.1', imageUrl: 'https://en.wikipedia.org/wiki/Aircraft#/media/File:Collection_of_military_aircraft.jpg', description: 'AircraftDescription5'}),
                Aircrafts.create({make: 'Country6', model: 'A6', year: '2019-12-31', type: 'Rescue', cost: '6.1', imageUrl: 'https://en.wikipedia.org/wiki/Aircraft#/media/File:Collection_of_military_aircraft.jpg', description: 'AircraftDescription6'}),
            ])
        })
        describe('getAircraftByType', function(){
            it('takes aircraft by type', async function(){
                const types = await Aircrafts.getAircraftByType('Attack')

                expect(types).to.have.length(2);
            })
        })
    })
})

