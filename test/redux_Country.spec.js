const chai = require('chai');
const expect = chai.expect;
const redux = require('redux')
const createStore = redux.createStore;

const gotSingleCountry = require('../client/reducers/countryReducer')
const updateCountry = require('../client/reducers/countryReducer')


// import {gotSingleCountry, updateCountry, countryReducer} from '../client/reducers/countryReducer'
// import {gotAllCountries, addCountry, gotTopFive, deleteCountry, countriesReducer} from 'client/reducers/countriesReducer.js'

// const COUNTRIES =[
//     {name: 'Country1', GFI: '3.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
//     {name: 'Country2', GFI: '4.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
//     {name: 'Country3', GFI: '5.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
//     {name: 'Country4', GFI: '6.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
//     {name: 'Country5', GFI: '7.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'},
//     {name: 'Country6', GFI: '8.4', flagUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png'}
// ];

// function getRandomCountry(countries){
//     return countries[Math.floor(Math.random() * countries.length)]
// }

// describe('actions', ()=>{
//     it('should create an action to get all countries', ()=>{
        
//     })
// })