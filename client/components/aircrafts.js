import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom'
import {getAllAircraftsThunk} from '../reducers/aircraftsReducer'
import  {deleteAircraftThunk, addAircraftThunk, findTypeThunk} from '../reducers/aircraftsReducer'
import NewAircraftForm from './formaircrafts'
import Search from '../components/searchtype'

class AllAircrafts extends Component{
    constructor(){
        super()
        this.state = {
            showAddNewAircraft: false
        }
        this.deleteAircraft = this.deleteAircraft.bind(this)
        this.toggle = this.toggle.bind(this)
        this.addAircraft = this.addAircraft.bind(this)
    }
    componentDidMount(){
        this.props.getAllAircrafts();
    }
    deleteAircraft(id){
        this.props.deleteAircraft(id)
    }
    addAircraft(newAircraft){
        this.props.addAircraft(newAircraft)
    }
    toggle(event){
        event.preventDefault()
            this.setState((prevState) => ({
                showAddNewAircraft: !prevState.showAddNewAircraft
            }))
    }

    render(){
        return (
            <div>
                <Search />
                <h3 class="top_five_title">Aircrafts</h3>
                <div>
                <button type="button" onClick={this.toggle}>Add aircraft</button>
                {
                this.state.showAddNewAircraft ? <NewAircraftForm addAircraft={this.addAircraft} /> : null
                }
                </div>
             
                {this.props.aircrafts.map(aircraft => (
                    <div key={aircraft.id}>
                        
                        <img class="img_" src={aircraft.imageUrl} height={100} />
                        <div class="spacer2"></div>
                        
                        <div class='circle'></div>
                        <Link key={aircraft.id} class="air__title" id="air_title" to={`/aircrafts/${aircraft.id}`}>{aircraft.make}</Link>
                        {/* <div class="spacer3"></div> */}
                        <button class='del'  type = "button" onClick={() =>  this.deleteAircraft(aircraft.id)}><i class="fa fa-trash"></i></button>
                        
                    </div>
                ))}
            </div>
           )
        }
    }
const mapStateToProps = (state) => ({
    aircrafts: state.aircraftsReducer
})

const mapDispatchToProps = (dispatch) => ({
    getAllAircrafts: () => dispatch(getAllAircraftsThunk()),
    deleteAircraft: (id) => dispatch(deleteAircraftThunk(id)),
    addAircraft: (newAircraft) => dispatch(addAircraftThunk(newAircraft))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllAircrafts)
