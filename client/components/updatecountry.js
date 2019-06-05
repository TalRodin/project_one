import React, {Component} from 'react' //to use jsx
import ReactDOM from 'react-dom'


const updateState={
            name:'',
            GFI: 0.0,
            flagUrl:''
}
class UpdateCountry extends React.Component{
       constructor() {
        super();
        this.state = updateState;
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName=this.handleName.bind(this)
        this.handleGFI=this.handleGFI.bind(this)
        this.handleFlagUrl=this.handleFlagUrl.bind(this)
        
    }

    handleSubmit(event){
        console.log('`````````````',this.props)
       event.preventDefault() 

          let updatedCountry={
            //   name:this.state.name,
              name: (this.state.name)?this.state.name:this.props.country.name,
              GFI:this.state.GFI,
              flagUrl:this.state.flagUrl
            //   name: (this.state.name)?this.state.name:this.props.country.name,
            //   GFI: (this.state.GFI)?this.state.GFI:this.props.country.GFI,
            //   flagUrl: (this.state.flagUrl)?this.state.flagUrl:this.props.country.flagUrl

          }
         this.props.updateCountry(updatedCountry)
         
         this.setState(updateState);

        
         
    }

    handleName(event){
         this.setState({
           name: event.target.value
        })
    }
    handleGFI(event){
        this.setState({
           GFI: event.target.value
       })
   }
    handleFlagUrl(event){
        this.setState({
           flagUrl: event.target.value
   })
}
    render(){
        console.log('WE-----ARE-----HERE-----:',this.props)
        return(
           
            <div>
                
                <h3>UPDATE COUNTRY DETAILS</h3>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='name'>Country Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleName} />

                    <label htmlFor='GFI'>GFI:</label>
                    <input type='text' name='GFI' value={this.state.GFI} onChange={this.handleGFI} />

                    <label htmlFor='flagUrl'>flagUrl:</label>
                    <input type='text' name='flagUrl' value={this.state.flagUrl} onChange={this.handleFlagUrl} />
                    
                    <hr></hr>
                    <button type='submit'>Submit</button>
                </form>
            </div>

       )
   }
}

export default UpdateCountry

