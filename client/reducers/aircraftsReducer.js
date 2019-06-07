import axios from 'axios';

const GOT_ALL_AIRCRAFTS='GOT_ALL_AIRCRAFTS'
const ADD_AIRCRAFT='ADD_AIRCRAFT'
const DELETE_AIRCRAFT= 'DELETE_AIRCRAFT'

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

export const getAllAircraftsThunk=()=>async (dispatch)=>{
    const {data} =await axios.get('/api/aircrafts')
    dispatch(gotAllAircrafts(data))
}

export const addAircraftThunk=(aircraft)=> async(dispatch)=>{
    console.log('in the addAircraftThunk before=---====----====---===--->', aircraft)
    const {data}=await axios.post('/api/aircrafts', aircraft)
    console.log('in the addAircraftThunk after=---====----====---===--->', data)
    dispatch(addAircraft(data))
}

export const deleteAircraftThunk=(id)=> async (dispatch)=>{
    await axios.delete(`/api/aircrafts/${id}`)
    dispatch(deleteAircraft(id))
 }


export const aircraftsReducer = (state=[], action)=>{
    switch(action.type){
        case GOT_ALL_AIRCRAFTS:
            return action.aircrafts
        case DELETE_AIRCRAFT:
            return state.filter(aircraft=>aircraft.id!=action.aircraftId)
        case ADD_AIRCRAFT:
            console.log('in the addAircraftThunk before state=---====----====---===--->', state)
            console.log('in the addAircraftThunk after  action=---====----====---===--->', action)
            return [...state, action.aircraft]
        default:
            return state    
    }
}