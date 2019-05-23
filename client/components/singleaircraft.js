import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleAircraftThunk} from '../reducers/aircraftReducer'
import { Link, Switch, Route } from 'react-router-dom'

class SingleAircraft extends React.Component{
    componentDidMount(){
          this.props.getSingleAircraft(this.props.match.params.id) 
    }                  
    render() {
        return (
            <div>
            <div>
                <h3>Make: {this.props.aircraft.make}</h3>

                <img src={this.props.aircraft.imageUrl} height={100}/>
            </div>

            <div>
                <Link to={`/countries`}>Countries</Link>
            </div>
    
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    aircraft: state.aircraftReducer //it goes from index.js combineReducer
})

const mapDispatchToProps=(dispatch)=>({
    getSingleAircraft: (id)=>dispatch(getSingleAircraftThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleAircraft)