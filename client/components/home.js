import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {getTopFiveThunk} from '../reducers/countriesReducer'
import {getSingleCountryThunk} from '../reducers/countryReducer'

class Home extends Component{
    // constructor() {
    //     super()
    // }
    componentDidMount(){
        this.props.getTopFive()
        this.props.getSingleCountry(this.props.match.params.id)

}
    render(){
        return (
            <div>
                {this.props.topfive.map(top => (
                    <div key={top.id}>
                        <img src={top.flagUrl} />
                        <NavLink key={top.id} to={`/countries/${top.id}`}>{top.name}</NavLink>
                        GFI:{top.GFI}
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
     getSingleCountry: (id) => dispatch(getSingleCountryThunk(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
