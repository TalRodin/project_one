import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, Switch,Route } from 'react-router-dom'
import {getAllCountriesThunk} from '../reducers/countriesReducer'
import  {deleteCountryThunk}  from '../reducers/countriesReducer'
import {addCountryThunk} from '../reducers/countriesReducer'
import NewCountryForm from './formcountries'
import {getSingleCountryThunk} from '../reducers/countryReducer'
import {getAllAircraftsThunk} from '../reducers/aircraftsReducer'
import { get } from 'http';

class AllCountries extends React.Component{
    constructor(){
        super()
        this.state={
            showAddNewCountry:false
        }
        this.deleteCountry=this.deleteCountry.bind(this)
        this.toggle=this.toggle.bind(this)
        this.addCountry=this.addCountry.bind(this)
    }
    componentDidMount(){
        this.props.getAllCountries();
        this.props.getAllAircrafts();
    }
    deleteCountry(id){
        this.props.deleteCountry(id)
    }
    addCountry(newCountry){
        this.props.addCountry(newCountry)
    }

    toggle(event){
        event.preventDefault()
            this.setState((prevState)=>({
                showAddNewCountry: !prevState.showAddNewCountry
            }))
        
    }
    render(){
        let aircrafts=this.props.aircrafts
        let countries=this.props.countries
        
        
        console.log('this is for number of aircraft in single country----------->', aircrafts.filter(aircraft=>aircraft.countryId===countries[3].id).length)
        console.log('this is for number of aircraft in single country----------->', countries)

        return(

            <div >
                <h3>Countries</h3>
            <div>
            <button onClick={this.toggle}>Add New Country</button>
            {
                this.state.showAddNewCountry ?  <NewCountryForm addCountry={this.addCountry}/> : null
                
            }
           </div> 
                <hr />
                {this.props.countries.map(country=>(
                    <div key={country.id}>
                        <img src={country.flagUrl} height={100} width={200}/>
                        <Link key={country.id} to={`/countries/${country.id}`}>{country.name}</Link>
                        <button onClick={()=>this.deleteCountry(country.id)}>Delete</button>
                        <h4><i>{country.name} Number of aircrafts: </i>{aircrafts.filter(aircraft=>aircraft.countryId===country.id).length}</h4>   
                    </div>
                ))}
           </div>
           )
}}

const mapStateToProps=(state)=>({
    countries: state.countriesReducer,
    aircrafts: state.aircraftsReducer
})

const mapDispatchToProps=(dispatch)=>({
    getAllCountries: ()=>dispatch(getAllCountriesThunk()),
    getAllAircrafts: ()=>dispatch(getAllAircraftsThunk()),
    deleteCountry: (id)=>dispatch(deleteCountryThunk(id)),
    addCountry:(newCountry)=>dispatch(addCountryThunk(newCountry))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCountries)