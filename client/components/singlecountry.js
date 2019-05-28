import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleCountryThunk} from '../reducers/countryReducer'
import { Link, Switch, Route } from 'react-router-dom'
import {updateCountryThunk} from '../reducers/countryReducer'
import UpdateCountry from './updatecountry'

class SingleCountry extends Component{
    constructor(){
        super()
        this.state={
            showUpdateCountry:false
        }
       
        this.toggle=this.toggle.bind(this)
        this.updateCountry=this.updateCountry.bind(this)
    }

    componentDidMount(){
          this.props.getSingleCountry(this.props.match.params.id) 
    }            
    updateCountry(updatedCountry){
        this.props.updateCountry(updatedCountry, this.props.match.params.id)
        
    }
    toggle(event){
        event.preventDefault()
            this.setState((prevState)=>({
                showUpdateCountry: !prevState.showUpdateCountry
            }))
        
    }  
    render() {
        let obj=this.props.country
        let id=this.props.country.id
        console.log('I AM HERE  THUNK>>>>>>>>>>>>>', this.props.country.id)
        return (
            
            <div>
          
            <div>
                <h3>Name: {this.props.country.name}</h3>
                <h3>GFI: {this.props.country.GFI}</h3>
                <img src={this.props.country.flagUrl} height={100}/>
            </div>

            <div>
                <Link to={`/aircrafts`}>Aircrafts</Link>
                
            </div>
            {(obj.aircrafts!==undefined) ? obj.aircrafts.map(aircraft=>(<Link key={aircraft.id} to={`/aircrafts/${aircraft.id}`}>{aircraft.make}</Link>)) : false}
       
            <button onClick={this.toggle}>Update Country</button>
            {
                this.state.showUpdateCountry ?  <UpdateCountry updateCountry={this.updateCountry}/> : null
                
            }
           </div>
            
        )
    }
}

const mapStateToProps=(state)=>({
    country: state.countryReducer //it goes from index.js combineReducer
})

const mapDispatchToProps=(dispatch)=>({
    getSingleCountry: (id)=>dispatch(getSingleCountryThunk(id)),
    updateCountry:(updatedCountry,id) => dispatch(updateCountryThunk(updatedCountry, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry)