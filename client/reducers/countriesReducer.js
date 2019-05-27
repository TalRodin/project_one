import axios from 'axios';

const GOT_ALL_COUNTRIES='GOT_ALL_COUNTRIES'
const ADD_COUNTRY='ADD_COUNTRY'
const GOT_TOP_FIVE='GOT_TOP_FIVE'
const UPDATE_COUTNRY = 'UPDATE_COUTNRY'

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

const updateCountry=(country)=>({
    type: UPDATE_COUTNRY,
    country
})
export const getAllCountriesThunk=()=>async (dispatch)=>{
    const {data} =await axios.get('/api/countries')
    dispatch(gotAllCountries(data))
}

export const addCountryThunk=(country)=> async(dispatch)=>{
    const {data}=await axios.post('/api/countries', country)
    dispatch(addCountry(data))
}

export const getTopFiveThunk=(countries)=> async(dispatch)=>{
    const {data}=await axios.get('/api/countries/top5/')
    dispatch(gotTopFive(data))
}

export const updateCountryThunk=()=> async(dispatch)=>{
    const {data}=await axios.get(`/api/countries/${id}`)
    dispatch(updateCountry(data))
}


export const countriesReducer = (state=[], action)=>{
   
    switch(action.type){
        case GOT_ALL_COUNTRIES:
            return action.countries
        case ADD_COUNTRY:
            return [...state, action.country]
        case GOT_TOP_FIVE:
            return action.countries
        case UPDATE_COUTNRY:
            const find=[...state].filter(country=>country.id!==action.country.id)
            return  [...find, action.country]
        default:
            return state    
    }
}