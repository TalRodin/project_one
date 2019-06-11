import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, Switch,Route } from 'react-router-dom'
import {getAllAircraftsThunk} from '../reducers/aircraftsReducer'
import  {deleteAircraftThunk}  from '../reducers/aircraftsReducer'
import {addAircraftThunk} from '../reducers/aircraftsReducer'
import NewAircraftForm from './formaircrafts'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {findTypeThunk} from '../reducers/aircraftsReducer'
import Search from '../components/searchtype'

const useStyles = {
    button: {
        margin: 1,
      },
      rightIcon: {
        marginLeft: 1,
      },
  };

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
        const classes = useStyles;
        return(
            <div>
                <Search />
                <h3>Aircrafts</h3>
  
                <div>
                <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} onClick={this.toggle}>
                    <AddIcon />
                </Fab>
                {
                this.state.showAddNewAircraft ?  <NewAircraftForm addAircraft={this.addAircraft}/> : null
                }
                </div> 
              
                <hr />
                
                {this.props.aircrafts.map(aircraft=>(
                    <div key={aircraft.id}>
                        <img src={aircraft.imageUrl} height={100}/>
                        <Link key={aircraft.id} to={`/aircrafts/${aircraft.id}`}>{aircraft.make}</Link>
                        {/* <button onClick={()=>this.deleteAircraft(aircraft.id)}></button> */}
                        <IconButton aria-label="Delete" className={classes.margin} onClick={()=>this.deleteAircraft(aircraft.id)}>
                           <DeleteIcon fontSize="small" />
                        </IconButton>
                    </div>
                ))}
           </div>
           )
        }
    }
const mapStateToProps=(state)=>({
    aircrafts: state.aircraftsReducer
})

const mapDispatchToProps=(dispatch)=>({
    getAllAircrafts: ()=>dispatch(getAllAircraftsThunk()),
    deleteAircraft: (id)=>dispatch(deleteAircraftThunk(id)),
    addAircraft:(newAircraft)=>dispatch(addAircraftThunk(newAircraft))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllAircrafts)