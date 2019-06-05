import React from 'react';
import {
  BrowserRouter as Router,
  Link,
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
import AppBar from '@material-ui/core/AppBar';
import Home from './home'
import Typography  from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'


const Root = () => {

  const style = {
    background: '#90a4ae',
  };
  
  return (
    <Router>
      <div>
        <AppBar position = 'static' style = {style}>
          <Navbar />
        </AppBar>

        <main>
          <Toolbar>
            <Typography variant='title' color='inherit'  >
              Astronomical Airforces
            </Typography>
          </Toolbar>
        </main>
       
        <Switch>
          <Route exact path="/countries/top5" component={TopFive} />
          <Route exact path="/" component={Home}/>
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