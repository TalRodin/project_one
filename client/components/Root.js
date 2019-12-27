import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllCountries from './countries';
import AllAircrafts from './aircrafts';
import SingleAircraft from './singleaircraft'
import SingleCountry from './singlecountry'
import AddCountry from './formcountries'
import AddAircraft from './formaircrafts'
import TopFive from './topfive'
import Navbar from './Navbar';
import Home from './home'

const Root = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <div> Lorem Ipsum</div> */}
       
        <Switch>
          <Route exact path="/countries/top5" component={TopFive} />
          <Route exact path="/" component={Home} />
          <Route exact path="/countries" component={AllCountries} />
          <Route exact path="/aircrafts" component={AllAircrafts} /> 
          <Route  path="/aircrafts/:id(\d+)" component={SingleAircraft} />
          <Route  path="/countries/:id(\d+)" component={SingleCountry} />
          <Route  path="/countries" component={AddCountry} />
          <Route  path="/aircrafts" component={AddAircraft} />
        </Switch>
      </div>
    </Router>
  )
}
export default Root;