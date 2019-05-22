// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import { Link, Switch,Route } from 'react-router-dom'
// import axios from 'axios'
// import singleCountry from './singlecountry'



// class AllCountries extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             showAddNewCountry:false
//         }
//         this.deleteCountry=this.deleteCountry.bind(this)
//         this.toggle=this.toggle.bind(this)
//         this.addCountry=this.addCountry.bind(this)
//     }
//     componentDidMount(){
//         this.props.getAllCountries()
//     }
//     deleteCountry(id){
//         this.props.deleteCountry(id)
//         this.props.getAllCountries()
//     }
//     addCountry(newCountry){
//         this.props.addCountry(newCountry)
//     }

//     toggle(event){
//         event.preventDefault()
//             this.setState((prevState)=>({
//                 showAddNewCountry: !prevState.showAddNewCountry
//             }))
        
//     }
//     render(){
//         return(
//             <div>
//             <h1>Countries</h1>
//                 {this.props.countries.map(country=>(
//                     <div>
//                         <img src={country.flagUrl} height={100}/>
//                         <Link key={country.id} to={`/singlecountry/${country.id}`}>{country.name}</Link>
//                         <button onClick={()=>this.deleteCountry(country.id)}>Delete</button>
//                     </div>
//                 ))}
//             </div>
//             )
//     }
// }

// const mapStateToProps=(state)=>({
//     countries: state.countriesReducer
// })

// const mapDispatchToProps=(dispatch)=>({
//     getAllCountries: ()=>dispatch(getAllCountries()),
//     deleteCountry: (id)=>dispatch(deleteCountryThunk(id)),
//     addCountry:(newCountry)=>dispatch(addCountryThunk(newCountry))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AllCountries)