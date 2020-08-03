import React , { Component } from 'react';
import Videos from './Videos';
import Exploitation from './Exploitation'

class Accueil extends Component{
    render() {

        return(
            <div className="App">
                <h1>Accueil</h1>
                <Exploitation/>
                <Videos/> 
            </div>
        );
    
    }
}

export default Accueil