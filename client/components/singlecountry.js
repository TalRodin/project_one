import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleCountryThunk, updateCountryThunk} from '../reducers/countryReducer'
import {Link} from 'react-router-dom'
import UpdateCountry from './updatecountry'
import {addAircraftThunk} from '../reducers/aircraftsReducer'
import AddAircraftToSingleCountry from './addAircraftToSingle'

class SingleCountry extends Component{
    constructor(){
        super()
        this.state = {
            showUpdateCountry: false,
            showAddAircraftToSingleCountry: false
        }
        this.toggle_update_country = this.toggle_update_country.bind(this)
        this.toggle_add_aircraft = this.toggle_add_aircraft.bind(this)
        this.updateCountry = this.updateCountry.bind(this)
        this.addAircraftToSingleCountry = this.addAircraftToSingleCountry.bind(this)
    }
    componentDidMount(){
          this.props.getSingleCountry(this.props.match.params.id)
    } 
    updateCountry(updatedCountry){
        this.props.updateCountry(updatedCountry, this.props.match.params.id) 
    }
    addAircraftToSingleCountry(NewAircraftToSingleCountry){
        this.props.addAircraftToSingleCountry(NewAircraftToSingleCountry)
    }
    toggle_update_country(event){
        event.preventDefault()
            this.setState((prevState) => ({
                showUpdateCountry: !prevState.showUpdateCountry
            }))
    }
    toggle_add_aircraft(event){
        event.preventDefault()
            this.setState((prevState) => ({
                showAddAircraftToSingleCountry:  !prevState.showAddAircraftToSingleCountry
            }))
    }
    render() {
        console.log(this)
        let country = this.props.country
        let id = this.props.country.id
        return (
            <div>
                <div>
                    <h3>Name: {this.props.country.name}</h3>
                    <h3>GFI: {this.props.country.GFI}</h3>
                    <h3>Number of aircrafts:{(country.aircrafts !== undefined) ? country.aircrafts.length : false}</h3>
                    <img src={this.props.country.flagUrl} height={100} />
                </div>
                <div>
                    <Link to = {`/aircrafts`} >Aircrafts</Link>
                </div>
                {(country.aircrafts !== undefined) ? country.aircrafts.map(aircraft => (<Link key={aircraft.id} to={`/aircrafts/${aircraft.id}`}>{aircraft.make}</Link>)) : false}
                <button type = "button" onClick={this.toggle_update_country}>Update Country</button>
                {
                    this.state.showUpdateCountry ? <UpdateCountry updateCountry={this.updateCountry} /> : null
                }
                <hr />
                <button type = "button" onClick={this.toggle_add_aircraft}>Add aircraft</button>
                {
                    this.state.showAddAircraftToSingleCountry ? <AddAircraftToSingleCountry addAircraftToSingleCountry={this.addAircraftToSingleCountry} /> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    country: state.countryReducer
})

const mapDispatchToProps = (dispatch) => ({
    getSingleCountry: (id) => dispatch(getSingleCountryThunk(id)),
    updateCountry: (updatedCountry, id) => dispatch(updateCountryThunk(updatedCountry, id)),
    addAircraftToSingleCountry: (NewAircraftToSingleCountry) => dispatch(addAircraftThunk(NewAircraftToSingleCountry))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry)
