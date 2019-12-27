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
    name: 'Lorem',
    GFI: 3.0,
    flagUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-world-map-artur-szafranski.jpg'
  })
  const Country2 = await Countries.create({
    name: 'Ipsum',
    GFI: 6.0,
    flagUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-world-map-artur-szafranski.jpg'
  })
  const Country3 = await Countries.create({
    name: 'Dolor',
    GFI: 4.0,
    flagUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-world-map-artur-szafranski.jpg'
  });
  const Country4 = await Countries.create({
    name: 'Sit',
    GFI: 3.5,
    flagUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-world-map-artur-szafranski.jpg'
  })
  const Country5 = await Countries.create({
    name: 'Amet',
    GFI: 6.5,
    flagUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-world-map-artur-szafranski.jpg'
  })
  const Country6 = await Countries.create({
    name: 'Consectetur',
    GFI: 4.5,
    flagUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pastel-world-map-artur-szafranski.jpg'
  });


  const aircrafts = [{
    make:  'Lorem',
    model: 'A1',
    year: '1903-03-23',
    type: 'Attack',
    cost: 1.0,
    imageUrl: 'https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-aircraft-paper-plane-cartoon-airplane-origami-png-image_336029.jpg',
    description: 'Aircrafts1',
    countryId: Country1.id

  },
  {
    make:  'Ipsum',
    model: 'A2',
    year: '1903-05-23',
    type: 'Bomber',
    cost: 2.0,
    imageUrl: 'https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-aircraft-paper-plane-cartoon-airplane-origami-png-image_336029.jpg',
    description: 'Aircrafts2',
    countryId: Country2.id
  },
  {
    make:  'Amet',
    model: 'A3',
    year: '1903-09-23',
    type: 'Versatile',
    cost: 3.0,
    imageUrl: 'https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-aircraft-paper-plane-cartoon-airplane-origami-png-image_336029.jpg',
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