import React from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor, faPaw, faSeedling } from '@fortawesome/free-solid-svg-icons';


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
                        <li><a href="#signup"><Button className="button" variant="outline-success"> S'abonner</Button></a></li>
                        <li><a href="#login"><Button className="button" variant="outline-success"> Connexion</Button></a></li>
                    </ul>
                </div>
            </Navbar.Collapse>
        </Navbar>

        <Navbar variant="dark" expand="lg" className="border-bottom border-light items mynavbar2" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="nav-link border-right border-left non-active-pill" activeClassName="pill" to='/news'><span className="fa fa-newspaper-o fa-lg"></span> ACTUALITÉS</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/meteo'><span className="fa fa-thermometer fa-lg"></span> MÉTÉO</NavLink>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/marches'><span className="fa fa-line-chart fa-lg"></span> COURS ET MARCHÉS</NavLink>
                    <Nav.Link className="nav-link border-right non-active-pill" activeClassName="pill" to="/cultures"><FontAwesomeIcon icon={faSeedling} /> CULTURES</Nav.Link>
                    <Nav.Link className="nav-link border-right non-active-pill" activeClassName="pill" to="/elevrage"><FontAwesomeIcon icon={faPaw} /> ÉLVAGES</Nav.Link>
                    <Nav.Link className="nav-link border-right non-active-pill" activeClassName="pill" to="/materiels"><FontAwesomeIcon icon={faTractor} /> TRACTEURS ET MATÉRIELS</Nav.Link>
                    <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/gestion'><span className="fa fa-file-text fa-lg"></span> GESTIONS ET DROITS</NavLink>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </div>
)