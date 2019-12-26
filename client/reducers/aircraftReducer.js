import axios from 'axios'

const GOT_SINGLE_AIRCRAFT='GOT_SINGLE_AIRCRAFT'
const UPDATE_AIRCRAFT = 'UPDATE_AIRCRAFT'


const gotSingleAircraft=(aircraft)=>({
    type: GOT_SINGLE_AIRCRAFT,
    aircraft
 })

const updateAircraft = (aircraft)=>({
   type: UPDATE_AIRCRAFT,
   aircraft
})

export const getSingleAircraftThunk=(id)=> async (dispatch)=>{
    const {data} = await axios.get(`/api/aircrafts/${id}`)
    dispatch(gotSingleAircraft(data))
 }

export const updateAircraftThunk=(aircraft, id)=>async (dispatch)=>{
   const {data}=await axios.put(`/api/aircrafts/${id}`, aircraft)
   dispatch(updateAircraft(data.aircrafts))

}

export const aircraftReducer = (state = [], action) => {
          switch(action.type){
            case GOT_SINGLE_AIRCRAFT:
                return action.aircraft
            case UPDATE_AIRCRAFT:
                return Object.assign({}, {country: state.country}, action.aircraft) 
            default: 
                return state
         }
     }
