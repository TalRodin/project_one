import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, Switch,Route } from 'react-router-dom'
import {getAllAircraftsThunk} from '../reducers/aircraftsReducer'
import  {deleteAircraftThunk}  from '../reducers/aircraftsReducer'
import {addAircraftThunk} from '../reducers/aircraftsReducer'
import NewAircraftForm from './formaircrafts'



class AllAircrafts extends React.Component{
    constructor(){
        super()
        this.state={
            showAddNewAircraft:false
        }
        this.deleteAircraft=this.deleteAircraft.bind(this)
        this.toggle=this.toggle.bind(this)
        this.addAircraft=this.addAircraft.bind(this)
    }
    componentDidMount(){
        this.props.getAllAircrafts();
    }
    deleteAircraft(id){
        this.props.deleteAircraft(id)
        // this.props.getAllAircrafts()
    }
    addAircraft(newAircraft){
        this.props.addAircraft(newAircraft)
    }

    toggle(event){
        event.preventDefault()
            this.setState((prevState)=>({
                showAddNewAircraft: !prevState.showAddNewAircraft
            }))
        
    }
    render(){
        console.log('this.props--------->',this.props)
        return(
            <div>
                <h3>Aircrafts</h3>
                <div>
            <button onClick={this.toggle}>Add New Aircraft</button>
            {
                this.state.showAddNewAircraft ?  <NewAircraftForm addAircraft={this.addAircraft}/> : null
            }
           </div>    
                <hr />
                
                {this.props.aircrafts.map(aircraft=>(
                    <div key={aircraft.id}>
                        <img src={aircraft.imageUrl} height={100}/>
                        <Link key={aircraft.id} to={`/aircrafts/${aircraft.id}`}>{aircraft.make}</Link>
                        <button onClick={()=>this.deleteAircraft(aircraft.id)}>Delete</button>
                    </div>
                ))}
           
           </div>
           )
}}
const mapStateToProps=(state)=>({
    aircrafts: state.aircraftsReducer
})

const mapDispatchToProps=(dispatch)=>({
    getAllAircrafts: ()=>dispatch(getAllAircraftsThunk()),
    deleteAircraft: (id)=>dispatch(deleteAircraftThunk(id)),
    addAircraft:(newAircraft)=>dispatch(addAircraftThunk(newAircraft))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllAircrafts)