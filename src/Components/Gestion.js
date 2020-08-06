import React , { Component } from 'react';
import News from "./HomeNews";
import { ARTICLES } from '../Shared/articles';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

class Gestion extends Component{
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
                        <BreadcrumbItem active>Gestion et Droit</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3><FontAwesomeIcon icon={faFileAlt} /> Actualités gestion et droit</h3>
                        <hr/>
                    </div>
                </div>
                <News articles={this.state.articles.filter((article) => article.theme === 'gestion')}/>
            </div>
        );
    
    }
}

export default Gestion;