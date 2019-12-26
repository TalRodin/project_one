import axios from 'axios'

const GOT_SINGLE_COUNTRY ='GOT_SINGLE_COUNTRY'
const UPDATE_COUNTRY = 'UPDATE_COUNTRY'


const gotSingleCountry=(country)=>({
    type: GOT_SINGLE_COUNTRY,
    country
 })

const updateCountry = (country)=>({
   type: UPDATE_COUNTRY,
   country
   
})

export const getSingleCountryThunk=(id)=> async (dispatch)=>{
    const {data} = await axios.get(`/api/countries/${id}`)
    dispatch(gotSingleCountry(data))
 }

export const updateCountryThunk=(country, id)=>async (dispatch)=>{
   const {data}=await axios.put(`/api/countries/${id}`, country)
   dispatch(updateCountry(data.countries))
}

export const countryReducer = (state = [], action) => {
          switch(action.type){
            case GOT_SINGLE_COUNTRY:
                return action.country
            case UPDATE_COUNTRY:
                return Object.assign({}, {aircrafts: state.aircrafts}, action.country)
            default: 
                return state
         }
     }

