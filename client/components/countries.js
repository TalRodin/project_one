import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, Switch,Route } from 'react-router-dom'
import {getAllCountriesThunk} from '../reducers/countriesReducer'
import  {deleteCountryThunk}  from '../reducers/countryReducer'
import {addCountryThunk} from '../reducers/countriesReducer'
import NewCountryForm from './formcountries'

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
    }
    deleteCountry(id){
        this.props.deleteCountry(id)
        this.props.getAllCountries()
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
                    </div>
                ))}
           </div>
           )
}}


const mapStateToProps=(state)=>({
    countries: state.countriesReducer
})

const mapDispatchToProps=(dispatch)=>({
    getAllCountries: ()=>dispatch(getAllCountriesThunk()),
    deleteCountry: (id)=>dispatch(deleteCountryThunk(id)),
    addCountry:(newCountry)=>dispatch(addCountryThunk(newCountry))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCountries)