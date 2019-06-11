import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllAircraftsThunk} from '../reducers/aircraftsReducer'
import {findTypeThunk} from '../reducers/aircraftsReducer'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            query: '',
            
          }
          this.handleInputChange=this.handleInputChange.bind(this)
          this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
      this.props.findType(this.state.query)
  }
   
    handleInputChange = () => {
        console.log(event.target.value)
        console.log('CHANGING STATE');
        
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    handleSubmit(){
      console.log('EXECUTING HANDLE SUBMIT' );
      
        event.preventDefault() 
        // let type={
        //   query: this.state.query
        // }
        const type = this.state.query;
        console.log('WORKING SO FAR', type );
        this.props.findType(type)
      }
    // findType(aircraftTypes){
    //     this.props.findType(aircraftTypes)
    // }  
    render() {
      console.log('=========>>>>>>',this.state.query) //EMPTY
      return (
        <form>
          <input
            placeholder="Search for..."
            type='search' name='query' value = {this.state.query}
            onChange={this.handleInputChange}
            className="searchBox"
          />
          {/* <button type='submit' onClick={()=>this.props.findType(this.state.query)}>Submit</button> */}
          <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      )
    }
   }
const mapStateToProps=(state)=>({
    aircraftTypes: state.aircraftsReducer
})   

const mapDispatchToProps=(dispatch)=>({
    findType: (types)=>dispatch(findTypeThunk(types))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)