const request = require('supertest');
const expect = require('chai').expect;

const app = require('../server/index');
const agent = request.agent(app);

const db = require('../server/db/_db')
const Countries = require('../server/db/models/Countries')

describe('Countries Route:', ()=>{
    before(() => {
        return db.sync({force: true});
      });
    afterEach(()=>{
        return Promise.all([
            Countries.truncate({cascade: true})
        ])
    })
    describe('GET/countries', ()=>{
        // it('responds with an array via JSON', async ()=>{
        //     const res = await agent
        //     .get('/countries')
        //     .expect('Content-Type', /json/)
        //     .expect(200)
        //     .end((err) => {
        //         if (err) {
        //           return done(err);
        //         }})
        //     expect(res.body).to.be.an.instanceOf(Array)
        //     expect(res.body).to.deep.have.length(0)
        // })

        it('returns a country if there is one in the DB', async () => {
            await Countries.create({name: 'Country1', GFI: '3.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'});

            const res = await agent
            .get('/countries')
            .expect(200)
            .end((err) => {
                if (err) {
                  return done(err);
                }
            expect(res.body).to.be.an.instanceOf(Array);
            expect(res.body[0].name).to.equal('Country1');   
          });    
    })
        it('returns another country if there is one in the DB', async ()=>{
            await Countries.create({name: 'Country1', GFI: '3.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'});
            await Countries.create({name: 'Country2', GFI: '3.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'});
            const res = await agent
            .get('/countries')
            .expect(200)
            .end((err) => {
                if (err) {
                  return done(err);
                }
            expect(res.body).to.be.an.instanceOf(Array)
            expect(res.body[0].name).to.equal('Country1');
            expect(res.body[1].name).to.equal('Country1');
        })
    })
})
    describe('GET /countries/:id', ()=>{
        let Country;
        beforeEach(async ()=>{
            const creatingCountry = [
                {name: 'Country1', GFI: '3.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
                {name: 'Country2', GFI: '4.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
                {name: 'Country3', GFI: '5.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
                {name: 'Country4', GFI: '6.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
                {name: 'Country5', GFI: '7.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
                {name: 'Country6', GFI: '8.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'}]
            .map(data=>Countries.create(data))
            const createdCountry = await Promise.all(creatingCountry)
            Country = createdCountry[1]
            })
            it('returns the JSON of the article based on the id', async()=>{
                const res = await agent
                .get('/countries/' + Country.id)
                .expect(200)
                .end((err) => {
                    if (err) {
                      return done(err);
                    }
                
                if (typeof res.body === 'string'){
                    res.body = JSON.parse(res.body)
                }
                expect(res.body.name).to.equal('Country1')
                return done();
            
            })  
   

})
    //      it('returns a 404 error if the ID is not correct', ()=>{
    //             return agent
    //             .get('/countries/12345')
    //             .expect(404)
    // })



})
})

