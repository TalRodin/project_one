import React, {Component} from 'react' //to use jsx
import ReactDOM from 'react-dom'


const updateState={
    make:'',
    model:'',
    year:'',
    type:'',
    cost:0,
    imageUrl:'',
    description:''
}
class UpdateAircraft extends React.Component{
       constructor() {
        super();
        this.state = updateState;
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleMake = this.handleMake.bind(this);
        this.handleModel=this.handleModel.bind(this)
        this.handleYear=this.handleYear.bind(this)
        this.handleType=this.handleType.bind(this)
        this.handleCost=this.handleCost.bind(this)
        this.handleImageUrl=this.handleImageUrl.bind(this)
        this.handleDescription=this.handleDescription.bind(this)
        
    }

    handleSubmit(event){
        console.log('`````````````',this.props)
       event.preventDefault() 

          let updatedAircraft={
            //   name:this.state.name,
            //   GFI:this.state.GFI,
            //   flagUrl:this.state.flagUrl

              make: this.state.make,
              model: this.state.model,
              year: this.state.year,
              type: this.state.type,
              cost: this.state.cost,
              imageUrl: this.state.imageUrl,
              description: this.state.description
            //   name: (this.state.name)?this.state.name:this.props.country.name,
            //   GFI: (this.state.GFI)?this.state.GFI:this.props.country.GFI,
            //   flagUrl: (this.state.flagUrl)?this.state.flagUrl:this.props.country.flagUrl

          }
         this.props.updateAircraft(updatedAircraft)
         
         this.setState(updateState);
    }

    handleMake(event){
        this.setState({
            make: event.target.value
        })
    }
    handleModel(event){
        this.setState({
            model:event.target.value
        })
    }
    handleYear(event){
        this.setState({
            year: event.target.value
        })
    }
    handleType(event){
        this.setState({
            type:  event.target.value
        })
    }
    handleCost(event){
        this.setState({
            cost: event.target.value
        })
    }
    handleImageUrl(event){
        this.setState({
            imageUrl: event.target.value
        })
    }
    handleDescription(event){
        this.setState({
            description: event.target.value
        })
    }




    render(){
        console.log('WE-----ARE-----HERE-----:',this.props)
        return(
            
           
            <div>
                
                <h3>UPDATE AIRCRAFT DETAILS</h3>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>

                            <label htmlFor='make'>make:</label>
                            <input type='text' name='make' value={this.state.make} onChange={this.handleMake} />

                            <label htmlFor='model'>model:</label>
                            <input type='text' name='model' value={this.state.model} onChange={this.handleModel} />

                            <label htmlFor='year'>year:</label>
                            <input type='text' name='year' value={this.state.year} onChange={this.handleYear} />

                            <label htmlFor='type'>type:</label>
                            <input type='text' name='type' value={this.state.type} onChange={this.handleType} />

                            <label htmlFor='cost'>cost:</label>
                            <input type='text' name='cost' value={this.state.cost} onChange={this.handleCost} />

                            <label htmlFor='imageUrl'>imageUrl:</label>
                            <input type='text' name='imageUrl' value={this.state.imageUrl} onChange={this.handleImageUrl} />

                            <label htmlFor='description'>description:</label>
                            <input type='text' name='description' value={this.state.description} onChange={this.handleDescription} />

                    <hr></hr>
                    <button type='submit'>Submit</button>
                </form>
            </div>

       )
   }
}

export default UpdateAircraft