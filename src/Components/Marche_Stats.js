import React, { Component } from 'react';
import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chart from './Chart';




export default class Marche_Stats extends Component{
    render() {

        return (
            <React.Fragment>
                <div className="App">
                    <div className="padd">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Accueil</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Cours et marchés</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3><FontAwesomeIcon icon={faChartLine} /> Cours et marchés</h3>
                            <hr />
                        </div>
                    </div>
                </div>
                <Chart/>
            </React.Fragment>
            
        );

    }  
}