import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const style={
  root: {
    margin: 3,
    padding: 6
  }
};

export default class Navbar extends Component{
    render() {
      return (
        <Toolbar>
          <Typography component="div">       
            <Button  variant="outlined" style={style.root} component={NavLink} to="/">
              <i className="material-icons custom">home</i>
            </Button>
            <Button  variant="outlined" style={style.root} component={NavLink} to="/aircrafts">AIRCRAFTS</Button>
            <Button  variant="outlined" component={NavLink} style={style.root} to="/countries">COUNTRIES</Button>
            <Button  variant="outlined" component={NavLink} style={style.root} to="/countries/top5">TOP FIVE</Button>   
          </Typography>   
        </Toolbar>    
      )
    }
  }