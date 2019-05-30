import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, Switch,Route } from 'react-router-dom'
import {getTopFiveThunk} from '../reducers/countriesReducer'


class Home extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getTopFive()
    }
    render(){
        return(
            <div>
                <h3>Top 5 Countries based on GFI</h3>
                <hr />
                {this.props.topfive.map(top=>(
                    <div key={top.id}>
                        <h2>Name:{top.name} GFI:{top.GFI}</h2>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    topfive: state.countriesReducer
})
const mapDispatchToProps=(dispatch)=>({
     getTopFive: ()=>dispatch(getTopFiveThunk())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)