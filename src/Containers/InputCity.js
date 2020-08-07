import React, { Component } from "react";


class InputCity extends Component {
    
    state={
        city : ''
    }

    handleChange = event => {
        this.setState({
            city : event.target.value
        })
    }

    
    
    render(){
        
        const Modifier = () => {
            if (this.state.city === '') {
                return (
                    <>
                        <h2>Voici le météo de Rabat</h2>
                    </>
                )
            }
            return (
                <>
                    <h2>Voici le météo de {this.state.city}</h2>
                </>
            )
        }


        return(
            <div style={{textAlign : 'center' , marginTop : '20px'}}>
                <Modifier />
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

export default InputCity;