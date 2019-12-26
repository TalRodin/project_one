import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{
    render() {
      return (
          <div>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/aircrafts">AIRCRAFTS</NavLink>
            <NavLink to="/countries">COUNTRIES</NavLink>
            <NavLink to="/countries/top5">TOP FIVE</NavLink>
          </div>
      )
    }
}
