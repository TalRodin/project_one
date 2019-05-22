import axios from 'axios';

const GOT_ALL_COUNTRIES='GOT_ALL_COUNTRIES'
const ADD_COUNTRY='ADD_COUNTRY'

const gotAllCountries=(countries)=>({
    type: GOT_ALL_COUNTRIES,
    countries
})

const addCountry = (country)=>({
    type: ADD_COUNTRY,
    country
})

export const gotAllCountriesThunk=()=>async (dispatch)=>{
    const {data} =await axios.get('/api/countries')
    dispatch(gotAllCountries(data))
}

export const addCountryThunk=(country)=> async(dispatch)=>{
    const {data}=await axios.post('/api/countries', country)
    dispatch(addCountry(data))
}

export const countriesReducer = (state=[], action)=>{
    switch(action.type){
        case GOT_ALL_COUNTRIES:
            return action.countries
        case ADD_COUNTRY:
            return [...state, action.country]
        default:
            return state    
    }
}