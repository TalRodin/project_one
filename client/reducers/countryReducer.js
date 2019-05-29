import axios from 'axios';

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
    console.log('lolololo/.........', id)
    const {data} = await axios.get(`/api/countries/${id}`)
    
    dispatch(gotSingleCountry(data))
 }

export const deleteCountryThunk=(id)=> async (dispatch)=>{
   console.log('delete/.........', id)
   await axios.delete(`/api/countries/${id}`)
   dispatch(deleteCountry(data))
}
// return state.filter(campus => campus.id !== action.id);

export const updateCountryThunk=(country, id)=>async (dispatch)=>{ 
   console.log('...........id',country)
   const {data}=await axios.put(`/api/countries/${id}`, country)
   console.log('eeeeeeeeeee',data.countries)
   dispatch(updateCountry(data.countries))
}

export const countryReducer = (state = [], action) => {

          switch(action.type){
            case GOT_SINGLE_COUNTRY:
                return action.country

            case UPDATE_COUNTRY:
                return action.country
            default: 
                return state
         }
     }

