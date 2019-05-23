import React, {Component} from 'react' //to use jsx
import ReactDOM from 'react-dom'

class NewCountryForm extends Component{
    constructor(){
       super()
        this.state={
           name:'',
           GFI: 0.0,
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
        GFI: 0.0,
        flagUrl:''
       }
    }
    handleChange(event){
         this.setState({
           [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div id='container'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:
                        <input type='text' name='name' value = {this.state.name} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='GFI'>GFI:
                        <input type='text' name='GFI'  value = {this.state.GFI} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='flagUrl'>flagUrl:
                        <input type='text' name='flagUrl'  value = {this.state.flagUrl} onChange={this.handleChange}/>
                    </label>

                   <button type='submit'>Submit</button>
                 </form>
          </div>
       )
   }
}

export default NewCountryForm    