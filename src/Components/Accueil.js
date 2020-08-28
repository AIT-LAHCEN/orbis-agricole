import React , { Component } from 'react';
import Videos from './Videos';
import Exploitation from './Exploitation';
import News from "./HomeNews";

import { ARTICLES } from '../Shared/articles';

class Accueil extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          articles: ARTICLES
        };
    }

      

    render() {

        return(
            <div className="App">
                
                <News/>
                <Exploitation/>
                <Videos/> 
            </div>
        );
    
    }
}

export default Accueil;