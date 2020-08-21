import React, { Component } from 'react';
import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chart from './Chart';
/* import $ from "jquery"; */




export default class Marche_Stats extends Component{
    
    /* componentDidMount(){
        $('.dropdown-toggle').dropdown('show')
        shown.coreui.tab
    } */
    
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
                <div className="content-stat">
                    <div class="row">

                        <div class="col-4 content-stat1">
                            <div class="list-group list-stat" id="list-tab" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                                
                                <div>
                                    
                                </div>
                                <a class="list-group-item list-group-item-success header-div">First item</a>
                                <a class="list-group-item list-group-item-action" id="list-test-list" data-toggle="list" href="#list-test" role="tab" aria-controls="test">Test</a>

                                
                                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                                
                            </div>
                        </div>

                        <div class="col-8">
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><Chart /></div>
                                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Profile</div>
                                <div class="tab-pane fade" id="list-test" role="tabpanel" aria-labelledby="test">test</div>
                                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Messages</div>
                                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Settings</div>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                
            </React.Fragment>
            
        );

    }  
}