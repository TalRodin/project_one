import React, {Component} from 'react' //to use jsx
import ReactDOM from 'react-dom'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles={
    container:{
        display:'flex',
        flexWrap:'wrap',
    },
    textField: {
        padding:'1px'
      },
}

class NewCountryForm extends Component{
    constructor(){
       super()
        this.state={
           name:'',
           GFI: '',
           flagUrl:''
        }
         this.handleSubmit=this.handleSubmit.bind(this)
         this.handleChange=this.handleChange.bind(this)
     }
    async handleSubmit(event){
       event.preventDefault() 
       this.props.addCountry(this.state)
       this.setState={
        name:'',
        GFI: '',
        flagUrl:''
       }
    }
    handleChange(event){
         this.setState({
           [event.target.name]: event.target.value
        })
    }
    render(){
        const classes=useStyles
        return(
            <div id='container' >
                <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                    {/* <label htmlFor='name'>Name:
                        <input type='text' name='name' value = {this.state.name} onChange={this.handleChange}/>
                    </label> */}




                    <TextField
        id="outlined-email-input"
        label="Name"
        value = {this.state.name}
        type='text'
        name='name'
        // className={useStyles.textField}
        
        margin= 'dense'
        variant="outlined"
        style={{padding: 4}}
        onChange={this.handleChange}
      />
        
                    {/* <label htmlFor='GFI'>GFI:
                        <input type='text' name='GFI'  value = {this.state.GFI} onChange={this.handleChange}/>
                    </label> */}

                      <TextField
        id="outlined-email-input"
        label="GFI"
        value = {this.state.GFI}
        type='text'
        name='GFI'
        margin= 'dense'
        variant="outlined"
        style={{padding: 4 }}
        
        onChange={this.handleChange}
      />





                    {/* <label htmlFor='flagUrl'>flagUrl:
                        <input type='text' name='flagUrl'  value = {this.state.flagUrl} onChange={this.handleChange}/>
                    </label> */}
                    <TextField
        id="outlined-email-input"
        label="flagUrl"
        value = {this.state.flagUrl}
        type='text'
        name='flagUrl'
        margin= 'dense'
        style={{padding: 4 }}
        variant="outlined"
        onChange={this.handleChange}
      />
<div>
<Button variant="outlined" size="large" color="primary" type='submit'>
Submit
        </Button>
        </div>
{/*        
                   <button type='submit'>Submit</button> */}
                 </form>
          </div>
       )
   }
}

export default NewCountryForm    