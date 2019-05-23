import React, {Component} from 'react' //to use jsx
import ReactDOM from 'react-dom'

class NewAircraftForm extends Component{
    constructor(){
       super()
        this.state={
           make:'',
           model:'',
           year:'',
           type:'',
           cost:0,
           imageUrl:'',
           description:''

        }
         this.handleSubmit=this.handleSubmit.bind(this)
         this.handleChange=this.handleChange.bind(this)
     }
    async handleSubmit(event){
       event.preventDefault() 
       this.props.addAircraft(this.state)
       this.setState={
        make:'',
        model:'',
        year:'',
        type:'',
        cost:0,
        imageUrl:'',
        description:''
       }
    }
    handleChange(event){
         this.setState({
           [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <div id='container'>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='make'>Make:
                        <input type='text' name='make' value = {this.state.make} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='model'>Model:
                        <input type='text' name='model'  value = {this.state.model} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='year'>Year:
                        <input type='text' name='year'  value = {this.state.year} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='type'>Type:
                        <input type='text' name='type'  value = {this.state.type} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='cost'>Cost:
                        <input type='text' name='cost'  value = {this.state.cost} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='imageUrl'>imageUrl:
                        <input type='text' name='imageUrl'  value = {this.state.imageUrl} onChange={this.handleChange}/>
                    </label>

                    <label htmlFor='description'>Description:
                        <input type='text' name='description'  value = {this.state.description} onChange={this.handleChange}/>
                    </label>

                   <button type='submit'>Submit</button>

                 </form>

          </div>
       )
   }
}

export default NewAircraftForm   