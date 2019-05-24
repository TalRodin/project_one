import axios from 'axios';

const GOT_ALL_COUNTRIES='GOT_ALL_COUNTRIES'
const ADD_COUNTRY='ADD_COUNTRY'
const GOT_TOP_FIVE='GOT_TOP_FIVE'

const gotAllCountries=(countries)=>({
    type: GOT_ALL_COUNTRIES,
    countries
})

const addCountry = (country)=>({
    type: ADD_COUNTRY,
    country
})

const  gotTopFive=(countries)=>({
    type: GOT_TOP_FIVE, 
    countries
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
export const countriesReducer = (state=[], action)=>{
    switch(action.type){
        case GOT_ALL_COUNTRIES:
            return action.countries
        case ADD_COUNTRY:
            return [...state, action.country]
        case GOT_TOP_FIVE:
            return action.countries
        default:
            return state    
    }
}