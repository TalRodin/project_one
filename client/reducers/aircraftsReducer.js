import axios from 'axios';

const GOT_ALL_AIRCRAFTS='GOT_ALL_AIRCRAFTS'
const ADD_AIRCRAFT='ADD_AIRCRAFT'
const DELETE_AIRCRAFT= 'DELETE_AIRCRAFT'
const FIND_TYPE = 'FIND_TYPE'

const gotAllAircrafts=(aircrafts)=>({
    type: GOT_ALL_AIRCRAFTS,
    aircrafts
})

const addAircraft = (aircraft)=>({
    type: ADD_AIRCRAFT,
    aircraft
})

const deleteAircraft = (aircraftId)=>({
    type: DELETE_AIRCRAFT,
    aircraftId
 })

const findType=(aircraftTypes)=>({
    type: FIND_TYPE,
    aircraftTypes
})
 
export const getAllAircraftsThunk=()=>async (dispatch)=>{
    const {data} =await axios.get('/api/aircrafts')
    dispatch(gotAllAircrafts(data))
}

export const addAircraftThunk=(aircraftTypes)=> async(dispatch)=>{
    const {data}=await axios.post('/api/aircrafts', aircraftTypes)
    dispatch(addAircraft(data))
}

export const deleteAircraftThunk=(id)=> async (dispatch)=>{
    await axios.delete(`/api/aircrafts/${id}`)
    dispatch(deleteAircraft(id))
 }

export const findTypeThunk=(type)=>async (dispatch)=>{
    const {data}=await axios.get(`/api/aircrafts/search?type=${type}`)
    dispatch(findType(data))
}

export const aircraftsReducer = (state=[], action)=>{
    switch(action.type){
        case GOT_ALL_AIRCRAFTS:
            return action.aircrafts
        case DELETE_AIRCRAFT:
            return state.filter(aircraft=>aircraft.id!=action.aircraftId)
        case ADD_AIRCRAFT:
            return [...state, action.aircraft]
        case FIND_TYPE:
            return action.aircraftTypes;
        default:
            return state    
    }
}