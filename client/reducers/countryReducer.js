// import axios from 'axios';

const GOT_SINGLE_COUNTRY ='GOT_SINGLE_COUNTRY'
const DELETE_COUNTRY = 'DELETE_COUNTRY'
const UPDATE_COUNTRY = 'UPDATE_COUNTRY'


const gotSingleCountry=(country)=>({
    type: GOT_SINGLE_COUNTRY,
    country
 })

const deleteCountry = (countryId)=>({
   type: DELETE_COUNTRY,
   countryId
})

const updateCountry = (country)=>({
   type: UPDATE_COUNTRY,
   country
})

export const getSingleCountryThunk=(id)=> async (dispatch)=>{
    const {data} = await axios.get(`/api/countries/${id}`)
    dispatch(gotSingleCountry(data))
 }

export const deleteCountryThunk=(id)=> async (dispatch)=>{
   await axios.delete(`/api/countries/${id}`)
   dispatch(deleteCountry(data))
}

export const updateCountryThunk=(id)=>async (dispatch)=>{
   const {data}=await axios.get(`/api/countries/${id}`)
   dispatch(updateCountry(data))
}

export const countryReducer = (state = [], action) => {
          switch(action.type){
            case GOT_SINGLE_COUNTRY:
                return action.country
            default: 
                return state
         }
     }