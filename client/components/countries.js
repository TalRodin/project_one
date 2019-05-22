// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import { Link, Switch,Route } from 'react-router-dom'
// import axios from 'axios'
// import singleCountry from './singlecountry'



// class AllCountries extends React.Component{
//     constructor(){
//         super()
        
//     }
//     componentDidMount(){
//         this.props.getAllCountries()
//     }
//     render(){
//         return(
//             <div>
//             <h1>Countries</h1>
//                 {this.props.countries.map(country=>(
//                     <div>
//                         <img src={country.imageUrl} height={100}/>
//                         <Link key={country.id} to={`/singlecountry/${country.id}`}>{country.name}</Link>
//                         <button onClick={()=>this.deleteCountry(country.id)}>Delete</button>
//                     </div>
//                 ))}
//             </div>
//             )
//     }
// }

// const mapStateToProps=(state)=>({
//     countries: state.countryReducer
// })

// const mapDispatchToProps=(dispatch)=>({
//     getAllCountries: ()=>dispatch(getAllCountries())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AllCountries)