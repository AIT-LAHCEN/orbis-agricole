import React from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor, faPaw, faSeedling, faFileAlt, faNewspaper, faChartLine, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';


export const Header = () => (
    <div className="navigation">
        <Navbar variant="dark" expand="lg" className="border-bottom border-light mynavbar1">
            <Navbar.Brand><Link style={{ textDecoration: 'none' }} className="title" to='/home'>Orbis Agricole</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="navbar-nav login-bar">
                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                    </Form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/signup"><Button className="button" variant="outline-success"> S'inscrire</Button></NavLink></li>
                        <li><NavLink to="/login"><Button className="button" variant="outline-success"> Connexion</Button></NavLink></li>
                    </ul>
                </div>
            </Navbar.Collapse>
        </Navbar>

        <Navbar variant="dark" expand="lg" className="border-bottom border-light items mynavbar2" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="nav-link border-right border-left non-active-pill" activeClassName="pill" to='/news'><FontAwesomeIcon icon={faNewspaper} /> ACTUALITÉS</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/meteo'><FontAwesomeIcon icon={faThermometerThreeQuarters} /> MÉTÉO</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/marches'><FontAwesomeIcon icon={faChartLine} /> COURS ET MARCHÉS</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/cultures"><FontAwesomeIcon icon={faSeedling} /> CULTURES</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/elevage"><FontAwesomeIcon icon={faPaw} /> ÉLVEAGE</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/materiels"><FontAwesomeIcon icon={faTractor} /> TRACTEURS ET MATÉRIELS</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/gestion'><FontAwesomeIcon icon={faFileAlt} /> GESTION ET DROIT</NavLink>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </div>
)