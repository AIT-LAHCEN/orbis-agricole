import React , { Component } from 'react';
import News from "./HomeNews";
import { ARTICLES } from '../Shared/articles';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor } from '@fortawesome/free-solid-svg-icons';

class Materiels extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          articles: ARTICLES
        };
    }

      

    render() {

        return(
            <div className="App">
                <div className="meteo">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Accueil</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Tracteurs et matériels</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3><FontAwesomeIcon icon={faTractor} /> Actualités machinisme</h3>
                        <hr/>
                    </div>
                </div>
                <News articles={this.state.articles.filter((article) => article.theme === 'matériels')}/>
            </div>
        );
    
    }
}

export default Materiels;