import React , { Component } from 'react';
import HomeMeteo from './HomeMeteo';
import News from "./HomeNews";
import Videos from './Videos';

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
                <HomeMeteo/>
                <Videos/>
            </div>
        );
    
    }
}

export default Accueil;