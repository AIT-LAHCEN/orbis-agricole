import React, { Component } from 'react';
import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chart from './Chart';
/* import $ from "jquery"; */




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
                    <div className="content-stat col-11 d-flex justify-content-center ml-auto mr-auto">
                        
                        <p className="HcpParagraph">
                            Voici un aperçu des différentes <b>statistiques</b> en ce qui concerne le monde agricole Marocain 
                            tiré du site du <b>Haut-Commissariat au plan (HCP)</b> qui est chargé de la production, de l'analyse 
                            et de la publication des statistiques officielles au Maroc.</p>
                        <img src='/orbis-agricole/images/hcp.jpg' className="ChartImage" alt="Snow"/>
                    </div>

                    
                <div className="content-stat mt-10">
                    <div class="row">

                        <div class="col-4 content-stat1">
                            <div class="list-group list-stat" id="list-tab" role="tablist">
                                <a class="list-group-item list-group-item-success header-div HeaderClassText header-div-elvages" href="#1">Elevages</a>
                                
                                <a class="list-group-item list-group-item-action active" 
                                    id="list-ouefs-list" 
                                    data-toggle="list" 
                                    href="#list-oeufs" 
                                    role="tab" 
                                    aria-controls="oeufs">
                                        Ouefs
                                </a>

                                <a class="list-group-item list-group-item-action" 
                                    id="list-viande-blanche-list" 
                                    data-toggle="list" 
                                    href="#list-viande-blanche" 
                                    role="tab" 
                                    aria-controls="viande-blanche">
                                        Viandes Blanches
                                </a>

                                

                                <a class="list-group-item list-group-item-action"
                                    id="list-viande-rouge-list"
                                    data-toggle="list"
                                    href="#list-viande-rouge"
                                    role="tab"
                                    aria-controls="viande-rouge">
                                    Viandes Rouges
                                </a>

                                <a class="list-group-item list-group-item-success header-div HeaderClassText header-div-prod-agri" href="#3">Productions Agricoles</a>
                                

                                <a class="list-group-item list-group-item-action"
                                    id="list-agrumes-list"
                                    data-toggle="list"
                                    href="#list-agrumes"
                                    role="tab"
                                    aria-controls="agrumes">
                                    Agrumes
                                </a>

                                <a class="list-group-item list-group-item-action"
                                    id="list-legumineuses-list"
                                    data-toggle="list"
                                    href="#list-legumineuses"
                                    role="tab"
                                    aria-controls="legumineuses">
                                    Légumineuses 
                                </a>


                                <a class="list-group-item list-group-item-action"
                                    id="list-cult-indust-list"
                                    data-toggle="list"
                                    href="#list-cult-indust"
                                    role="tab"
                                    aria-controls="cult-indust">
                                    Cultures industrielles
                                </a>


                                <a class="list-group-item list-group-item-success header-div HeaderClassText header-div-superf-cultiv" href="#2">Superficies cultivées</a>


                                <a class="list-group-item list-group-item-action"
                                    id="list-cereales-list"
                                    data-toggle="list"
                                    href="#list-cereales"
                                    role="tab"
                                    aria-controls="cereales">
                                    Céréales
                                </a>

                                <a class="list-group-item list-group-item-action"
                                    id="list-cult-fourr-list"
                                    data-toggle="list"
                                    href="#list-cult-fourr"
                                    role="tab"
                                    aria-controls="cult-fourr">
                                    Cultures fourragères
                                </a>

                                <a class="list-group-item list-group-item-action"
                                    id="list-jachere-list"
                                    data-toggle="list"
                                    href="#list-jachere"
                                    role="tab"
                                    aria-controls="jachere">
                                    Jachère
                                </a>
                                
                            </div>
                        </div>

                        <div class="col-8 mt-5">
                            <div class="tab-content" id="nav-tabContent">


                                {/* Ouefs */}
                                <div class="tab-pane fade show active" id="list-oeufs" role="tabpanel" aria-labelledby="list-ouefs-list">
                                    
                                    <Chart children={{show : 'ouefs'}}/>
                                    <p className="HcpParagraph">
                                        Source : MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>

                                {/* Viande Blanche */}
                                <div class="tab-pane fade" id="list-viande-blanche" role="tabpanel" aria-labelledby="list-viande-blanche-list">

                                    <Chart children={{ show: 'viandeblanche' }} />
                                    <p className="HcpParagraph">
                                        Source : MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>


                                {/* Viande Rouge */}
                                <div class="tab-pane fade" id="list-viande-rouge" role="tabpanel" aria-labelledby="list-viande-rouge-list">

                                    <Chart children={{ show: 'vianderouge' }} />
                                    <p className="HcpParagraph">
                                        Source: OFFICE NATIONAL DE LA SECURITE SANITAIRE DES ALIMENTS (ONSSA)
                                    </p>
                                </div>


                                {/* Agrumes */}
                                <div class="tab-pane fade" id="list-agrumes" role="tabpanel" aria-labelledby="list-agrumes-list">

                                    <Chart children={{ show: 'agrumes' }} />
                                    <p className="HcpParagraph">
                                        Source: MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>


                                {/* Legumineuses */}
                                <div class="tab-pane fade" id="list-legumineuses" role="tabpanel" aria-labelledby="list-legumineuses-list">

                                    <Chart children={{ show: 'legumineuses' }} />
                                    <p className="HcpParagraph">
                                        Source: MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>

                                {/* cultures industrielles */}

                                <div class="tab-pane fade" id="list-cult-indust" role="tabpanel" aria-labelledby="list-cult-indust-list">

                                    <Chart children={{ show: 'culturesindustrielles' }} />
                                    <p className="HcpParagraph">
                                        Source: MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>

                                {/* Céréales */}

                                <div class="tab-pane fade" id="list-cereales" role="tabpanel" aria-labelledby="list-cereales-list">

                                    <Chart children={{ show: 'cereales' }} />
                                    <p className="HcpParagraph">
                                        Source: MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>

                                {/* cultures fourragères */}

                                <div class="tab-pane fade" id="list-cult-fourr" role="tabpanel" aria-labelledby="list-cult-fourr-list">

                                    <Chart children={{ show: 'culturesfourrageres' }} />
                                    <p className="HcpParagraph">
                                        Source: MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>

                                {/* jachères */}

                                <div class="tab-pane fade" id="list-jachere" role="tabpanel" aria-labelledby="list-jachere-list">

                                    <Chart children={{ show: 'jachere' }} />
                                    <p className="HcpParagraph">
                                        Source: MINISTERE DE L’AGRICULTURE ET DE LA PECHE MARITIME DU DEVELOPPEMENT RURALE ET DES EAUX ET FORETS
                                    </p>
                                </div>

                                </div>
                        </div>
                    </div>
                </div>
                

                
                
            </React.Fragment>
            
        );

    }  
}