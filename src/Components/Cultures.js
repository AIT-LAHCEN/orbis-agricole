import React , { Component } from 'react';
import News from "./HomeNews";
import { ARTICLES } from '../Shared/articles';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

class Cultures extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          articles: ARTICLES
        };
    }

      

    render() {

        return(
            <div className="App">
                <div className="padd">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Accueil</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Cultures</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3><FontAwesomeIcon icon={faSeedling} /> Actualités cultures</h3>
                        <hr/>
                    </div>
                </div>
                <News articles={this.state.articles.filter((article) => article.theme === 'cultures')}/>
            </div>
        );
    
    }
}

export default Cultures;