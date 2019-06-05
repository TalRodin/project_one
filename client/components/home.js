import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink, Switch,Route,Button } from 'react-router-dom'
import {getTopFiveThunk} from '../reducers/countriesReducer'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const useStyles ={
    card: {
      maxWidth: 345,
    },
    media: {
      height:140,
    },
    typography: {
        align: "center",
      },
  };
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
                {this.props.topfive.map(top=>(
                     <div style={{padding: '10px'}} key={top.id}>
                         
                        <CardActionArea key={top.id} style={{width: '400px', height:'200px'}}> 
                             <Card style={{width: '400px', height:'200px'}}>       
                                <CardContent>
                                
                                    <img src={top.flagUrl} align='left' height={140} width={180}/>
                                    
                                    <Typography  variant="h5" component="h2">
                                        {top.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        GFI: {top.GFI}
                                    </Typography>
                                    
                                </CardContent>              
                             </Card>
                        </CardActionArea> 
                      
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