import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllAircraftsThunk, findTypeThunk} from '../reducers/aircraftsReducer'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            query: '',
          }
          this.handleInputChange = this.handleInputChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
      this.props.findType(this.state.query)
  }
    handleInputChange = () => {
      this.setState({
          [event.target.name]: event.target.value
        })
      }
    handleSubmit(){
        event.preventDefault()
        const type = this.state.query;
        this.props.findType(type)
      }
    render() {
        return (
        <form>
          <label htmlFor="type">Type:
          <select type="search" name="query" placeholder="Search for..." value = {this.state.query} onChange={this.handleInputChange}>
              <option ></option>
              <option value="Attack">Attack</option>
              <option value="Bomber">Bomber</option>
              <option value="Versatile">Versatile</option>
              <option value="Transport">Transport</option>
              <option value="Reconoissance">Reconoissance</option>
              <option value="Rescue">Rescue</option>
          </select>
          </label>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      )
    }
   }
const mapStateToProps = (state) => ({
    aircraftTypes: state.aircraftsReducer
})
const mapDispatchToProps = (dispatch) => ({
    findType: (types) => dispatch(findTypeThunk(types))
  })
export default connect(mapStateToProps, mapDispatchToProps)(Search)
