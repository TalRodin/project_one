const {db} = require('./server/db/models')
const {green, red} = require('chalk')
const Promise = require('bluebird');
// bring in the db and all the Models to seed
const Aircrafts = require('./server/db/models/Aircrafts');
const Countries = require('./server/db/models/Countries');

const seed = async () => {
await db.sync({force: true})

// seed your database here!


const Country1 = await Countries.create({
    name: 'Country1',
    GFI: 3.0,
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Collection_of_military_aircraft.jpg/600px-Collection_of_military_aircraft.jpg'
  })
  const Country2 = await Countries.create({
    name: 'Country2',
    GFI: 6.0,
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Collection_of_military_aircraft.jpg/600px-Collection_of_military_aircraft.jpg'
  })
  const Country3 = await Countries.create({
    name: 'Country3',
    GFI: 4.0,
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Collection_of_military_aircraft.jpg/600px-Collection_of_military_aircraft.jpg'
  });


  const aircrafts = [{
    make:  'Make1',
    model: 'A1',
    year: '1903-03-23',
    type: 'Attack',
    cost: 1.0,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Collection_of_military_aircraft.jpg/600px-Collection_of_military_aircraft.jpg',
    description: 'Aircrafts1',
    countryId: Country1.id

  },
  {
    make:  'Make2',
    model: 'A2',
    year: '1903-05-23',
    type: 'Bomber',
    cost: 2.0,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Collection_of_military_aircraft.jpg/600px-Collection_of_military_aircraft.jpg',
    description: 'Aircrafts2',
    countryId: Country2.id
  },
  {
    make:  'Make3',
    model: 'A3',
    year: '1903-09-23',
    type: 'Versatile',
    cost: 3.0,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Collection_of_military_aircraft.jpg/600px-Collection_of_military_aircraft.jpg',
    description: 'Aircrafts3',
    countryId: Country3.id
  }];

  await Promise.all(aircrafts.map(aircraft => {
    return Aircrafts.create(aircraft);
  }));

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })