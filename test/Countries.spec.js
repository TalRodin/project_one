const Promise = require('bluebird');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const db = require('../server/db/_db')
const Countries = require('../server/db/models/Countries')

describe('Countries', function(){
    // clear the database before all tests
  before(() => {
    return db.sync({force: true});
  });

  // erase all tasks after each spec
  afterEach(() => {
    return db.sync({force: true});
  });

  describe('Class methods', function(){
        beforeEach(async() => {
          await Promise.all([
            Countries.create({name: 'Country1', GFI: '3.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'}),
            Countries.create({name: 'Country2', GFI: '4.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'}),
            Countries.create({name: 'Country3', GFI: '5.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'}),
            Countries.create({name: 'Country4', GFI: '6.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'}),
            Countries.create({name: 'Country5', GFI: '7.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'}),
            Countries.create({name: 'Country6', GFI: '8.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'})
          ])
      })
        describe('getTopFive', function(){
            it('takes the top five countries, based on GFI', async function(){
                const topCountries  = await Countries.getTopFive()

                expect(topCountries).to.have.length(5);
            })
        })
        
  } )
});

