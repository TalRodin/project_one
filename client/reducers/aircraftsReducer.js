import axios from 'axios';

const GOT_ALL_AIRCRAFTS='GOT_ALL_AIRCRAFTS'
const ADD_AIRCRAFT='ADD_AIRCRAFT'

const gotAllAircrafts=(aircrafts)=>({
    type: GOT_ALL_AIRCRAFTS,
    aircrafts
})

const addAircraft = (aircraft)=>({
    type: ADD_AIRCRAFT,
    aircraft
})

export const gotAllAircraftsThunk=()=>async (dispatch)=>{
    const {data} =await axios.get('/api/aircrafts')
    dispatch(gotAllAircrafts(data))
}

export const addAircraftThunk=(aircraft)=> async(dispatch)=>{
    const {data}=await axios.post('/api/aircrafts', aircraft)
    dispatch(addAircraft(data))
}

export const countryReducer = (state=[], action)=>{
    switch(action.type){
        case GOT_ALL_AIRCRAFTS:
            return action.aircrafts
        case ADD_AIRCRAFT:
            return [...state, action.aircraft]
        default:
            return state    
    }
}