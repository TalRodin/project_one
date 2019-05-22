/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import  { countriesReducer } from './countriesReducer'

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer

export default combineReducers({
  countriesReducer
})
