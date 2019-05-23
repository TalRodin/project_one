import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleCountryThunk} from '../reducers/countryReducer'
import { Link, Switch, Route } from 'react-router-dom'

class SingleCountry extends React.Component{
    componentDidMount(){
          this.props.getSingleCountry(this.props.match.params.id) 
    }                  
    render() {
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
    
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    country: state.countryReducer //it goes from index.js combineReducer
})

const mapDispatchToProps=(dispatch)=>({
    getSingleCountry: (id)=>dispatch(getSingleCountryThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry)