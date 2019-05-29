import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateAircraftThunk} from '../reducers/aircraftReducer'
import { Link, Switch, Route } from 'react-router-dom'
import UpdateAircraft from './updateaircraft';
import {getSingleAircraftThunk} from '../reducers/aircraftReducer'

class SingleAircraft extends React.Component{
    constructor(){
        super()
        this.state={
            showUpdateAircraft:false
        }
        this.toggle=this.toggle.bind(this)
        this.updateAircraft=this.updateAircraft.bind(this)
    }
    
    componentDidMount(){
          this.props.getSingleAircraft(this.props.match.params.id) 
    }                  
    updateAircraft(updatedAircraft){
        this.props.updateAircraft(updatedAircraft, this.props.match.params.id)
    }
    toggle(event){
        event.preventDefault()
            this.setState((prevState)=>({
                showUpdateAircraft: !prevState.showUpdateAircraft
            }))
    }
    render() {
        let obj=this.props.aircraft
        let id=this.props.aircraft.id
        console.log('I AM HERE  THUNK>>>>>>>>>>>>>', this.props.aircraft.id)
        return (
            <div>
            <div>
                <h3>Make: {this.props.aircraft.make}</h3>

                <img src={this.props.aircraft.imageUrl} height={100}/>
            </div>

            <div>
                <Link to={`/countries`}>Countries</Link>
            </div>
             {(obj.country!==undefined) ? <Link key={obj.country.id} to={`/countries/${obj.country.id}`}>{obj.country.name}</Link> : false}
            
            <button onClick={this.toggle}>Update Aircraft</button>
            {
                this.state.showUpdateAircraft ? <UpdateAircraft updateAircraft={this.updateAircraft}/> : null
            }
            </div> 
        )
    }
}

const mapStateToProps=(state)=>({
    aircraft: state.aircraftReducer //it goes from index.js combineReducer
})

const mapDispatchToProps=(dispatch)=>({
    getSingleAircraft: (id)=>dispatch(getSingleAircraftThunk(id)),
    updateAircraft:(updatedAircraft, id)=>dispatch(updateAircraftThunk(updatedAircraft, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleAircraft)