import React, {Component} from 'react' //to use jsx
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import {addAircraftThunk} from '../reducers/aircraftsReducer'
import {getAllCountriesThunk} from '../reducers/countriesReducer'
import {getSingleCountryThunk} from '../reducers/countryReducer'

class AddAircraftToSingleCountry extends Component{
    constructor(){
       super()
        this.state={
           make:'',
           model:'',
           year:'',
           type:'',
           cost:0,
           imageUrl:'',
           description:'',
           countryId:''

        }
         this.handleSubmit=this.handleSubmit.bind(this)
         this.handleChange=this.handleChange.bind(this)
     }
     componentDidMount(){
        this.props.getAllCountries();
        // this.props.getSingleCountry() 
        // this.props.match.params.id
        // console.log('componentDidMount=---------->',this.props.countries.id)
    }
    async handleSubmit(event){
       event.preventDefault() 
       this.props.addAircraft(this.state)
     this.setState={
        make:'',
        model:'',
        year:'',
        type:'',
        cost:0,
        imageUrl:'',
        description:'',
        countryId: ''
    }
        
       console.log('we are here', this.state)
    }

    handleChange(event){
         this.setState({
           [event.target.name]: event.target.value
        })
    }
    render(){
        console.log('we are here---------->', this.props)
        return(
            <div id='container'>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='make'>Make:
                        <input type='text' name='make' value = {this.state.make} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='model'>Model:
                        <input type='text' name='model'  value = {this.state.model} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='year'>Year:
                        <input type='text' name='year'  value = {this.state.year} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='type'>Type:
                        <input type='text' name='type'  value = {this.state.type} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='cost'>Cost:
                        <input type='text' name='cost'  value = {this.state.cost} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='imageUrl'>imageUrl:
                        <input type='text' name='imageUrl'  value = {this.state.imageUrl} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='description'>Description:
                        <input type='text' name='description'  value = {this.state.description} onChange={this.handleChange}/>
                    </label>

                  <label htmlFor='countryId'>Country:</label>
                     <select name='countryId'  value={this.state.countryId} onChange={this.handleChange}>   
                    
               
                         {
                             this.props.countries.map(country=>(
                                 <option key={country.id} value={country.id}>{country.name}</option>
                             ))
                         }
                     </select>
                    

                   <button type='submit'>Submit</button>

                 </form>

          </div>
       )
   }
}
const mapStateToProps=(state)=>({
    countries: state.countriesReducer
})
const mapDispatchToProps=(dispatch)=>({
    getAllCountries: ()=>dispatch(getAllCountriesThunk()),
    // getSingleCountry: (id)=>dispatch(getSingleCountryThunk(id)),
    addAircraft:(newAircraft)=>dispatch(addAircraftThunk(newAircraft))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddAircraftToSingleCountry);