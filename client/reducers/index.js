/* combineReducers is not currently used, but eventually should be for modular code :D */
// import axios from 'axios';
import {combineReducers} from 'redux'
import {countriesReducer} from './countriesReducer'
import {countryReducer} from  './countryReducer'
import {aircraftReducer} from './aircraftReducer'
import {aircraftsReducer} from './aircraftsReducer'


// const initialState = {}
// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };
// export default rootReducer

export default combineReducers({
  countriesReducer,
  countryReducer,
  aircraftReducer,
  aircraftsReducer
})
