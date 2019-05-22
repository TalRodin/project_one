import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import AllCountries from './countries';

import Navbar from './Navbar';
import AppBar from '@material-ui/core/AppBar';


const Root = () => {

  const style = {
    background: '#90a4ae'
  };

  return (
    <Router>
    <div>

      <AppBar position = 'static' style = {style}>
        <Navbar />
      </AppBar>

      <main>
         <h1 >AIRCRAFT</h1>
      </main>
      <Switch>
        {/* <Route exact path="/countries" component={AllCountries} /> */}
        {/* <Route exact path="/aircrafts" component={AllAircrafts} />  */}
       

        {/* <Route  path="/aircrafts/:id(\d+)" component={SingleAircraft} />
        <Route  path="/countries/:id(\d+)" component={SingleCountry} /> */}

         {/*
         <Route  path="/students" component={AddStudent} />
         <Route  path="/campuses" component={AddCampus} /> */}
         {/* <Route  path="/updatecampus" component={UpdateCampus} />
         <Route  path="/updatestudent" component={UpdateStudent} /> */}
      </Switch>
    </div>
    </Router>
  )
}

export default Root