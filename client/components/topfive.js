import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {getTopFiveThunk} from '../reducers/countriesReducer'

class TopFive extends Component{
    // constructor(){
    //     super()
    // }
    componentDidMount(){
        this.props.getTopFive();
    }
    render(){
        return (
         <div >
            <h3>Countries</h3>
                <hr />
            {this.props.topfive.map(top => (
                <div key={top.id}>
                    Name:<NavLink key = {top.id} to = {`/countries/${top.id}`}>{top.name}</NavLink>
                    <h2>GFI:{top.GFI}</h2>
                </div>
            ))}
         </div>
            )
       }
   }
const mapStateToProps = (state) => ({
    topfive: state.countriesReducer
})
const mapDispatchToProps = (dispatch) => ({
    getTopFive: () => dispatch(getTopFiveThunk()),
})
export default connect(mapStateToProps, mapDispatchToProps)(TopFive)
