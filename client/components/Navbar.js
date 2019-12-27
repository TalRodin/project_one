import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{
    render() {
      return (
          <div class="menu">
            <div class="label">MENU</div>
            <div class="spacer"></div>
            <div class="item">
            <span><NavLink to="/">HOME</NavLink></span></div>
            <div class="item">
            <span><NavLink to="/aircrafts">AIRCRAFTS</NavLink></span></div>
            <div class="item">
            <span><NavLink to="/countries">COUNTRIES</NavLink></span></div>
            <div class="item">
            <span><NavLink to="/countries/top5">TOP FIVE</NavLink></span></div>
          </div>
      )
    }
}
