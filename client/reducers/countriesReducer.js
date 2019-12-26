import axios from 'axios';

const GOT_ALL_COUNTRIES='GOT_ALL_COUNTRIES'
const ADD_COUNTRY='ADD_COUNTRY'
const GOT_TOP_FIVE='GOT_TOP_FIVE'
const DELETE_COUNTRY = 'DELETE_COUNTRY'


const gotAllCountries=(countries)=>({
    type: GOT_ALL_COUNTRIES,
    countries
})

const addCountry = (country)=>({
    type: ADD_COUNTRY,
    country
})

const gotTopFive=(countries)=>({
    type: GOT_TOP_FIVE, 
    countries
})
const deleteCountry = (countryId)=>({
    type: DELETE_COUNTRY,
    countryId
 })

export const getAllCountriesThunk=()=>async (dispatch)=>{
    const {data} =await axios.get('/api/countries')
    dispatch(gotAllCountries(data))
}

export const addCountryThunk=(country)=> async(dispatch)=>{
    const {data}=await axios.post('/api/countries', country)
    dispatch(addCountry(data))
}

export const getTopFiveThunk=()=> async(dispatch)=>{
    const {data}=await axios.get('/api/countries/top5/')
    dispatch(gotTopFive(data))
}

export const deleteCountryThunk=(id)=> async (dispatch)=>{
    await axios.delete(`/api/countries/${id}`)
    dispatch(deleteCountry(id))
 }

export const countriesReducer = (state=[], action)=>{
    switch(action.type){
        case GOT_ALL_COUNTRIES:
            return action.countries
        case DELETE_COUNTRY:
            return state.filter(country=>country.id!=action.countryId)
        case ADD_COUNTRY:
            return [...state, action.country]
        case GOT_TOP_FIVE:
            return action.countries
        default:
            return state    
    }
}