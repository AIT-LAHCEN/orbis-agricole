import React from 'react' ;


export default class InputCity extends React.Component {

    

    state={
        city : ''
    }

    handleChange = event => {
        this.setState({
            city : event.target.value
        })
    }
    
    render(){
        

        return(
            <div style={{textAlign : 'center' , marginTop : '20px'}}>
                <input type="text" 
                placeholder="Entrer le nom de la ville"
                value={this.state.city}
                onChange={this.handleChange} />
                <button onClick={()=>{this.props.getTemperature(this.state.city)}}>Voir météo</button>
            </div>
        );
    }

    componentDidMount() {
        this.props.getTemperature("Rabat");
    }
}