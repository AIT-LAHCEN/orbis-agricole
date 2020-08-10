import React, { Component } from "react";
import $ from "jquery";


class InputCity extends Component {
    
    state={
        city : ''
    }

    handleChange = event => {
        this.setState({
            city : event.target.value
        })
    }

    search_click = () => {
        $(".accept-button").click(function(){
           $(this).addClass("activeMeteo"); 

           setTimeout(function () {
               $(".accept-button").addClass("successMeteo");
           },1000);

           setTimeout(function () {
               $(".accept-button").removeClass("activeMeteo");
               $(".accept-button").removeClass("successMeteo");
           },2000);
        });
    }

    
    
    render(){
        
        const Modifier = () => {
            if (this.state.city === '') {
                return (
                    <>
                        <h3>La météo de Rabat</h3>
                    </>
                )
            }
            return (
                <>
                    <h3>La météo de {this.state.city}</h3>
                </>
            )
        }


        return(
            <div style={{textAlign : 'center' , marginTop : '20px'}}>
                <Modifier />
                {/* <input type="text" 
                placeholder="Modifier la ville"
                value={this.state.city}
                onChange={this.handleChange} /> */}
                <div className="search-city">
                    <select className="select-city" value={this.state.city} onChange={this.handleChange}>
                        <option value="Rabat">Rabat</option>
                        <option value="Tanger">Tanger</option>
                        <option value="Casa">Casa</option>
                        <option value="Agadir">Agadir</option>
                    </select>
                    <button className="accept-button" onClick={ () => { 
                        this.search_click();
                        this.props.getTemperature(this.state.city); 
                        }}>
                            Voir météo
                    </button>
                </div>
               </div>
        );
    }

    componentDidMount() {
        this.props.getTemperature("Rabat");
    }
}

export default InputCity;