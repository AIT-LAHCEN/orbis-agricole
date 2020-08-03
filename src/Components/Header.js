import React from 'react';
import { Button,Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export const Header = () => (
    <div className="navigation">
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><h1 className="title">Orbis Agricole</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink className="nav-link"  to='/news'><span className="fa fa-newspaper-o fa-lg"></span> Actualités</NavLink>
            <NavLink className="nav-link"  to='/meteo'><span className="fa fa-thermometer fa-lg"></span> Météo</NavLink>
            <NavLink className="nav-link"  to='/marches'><span className="fa fa-line-chart fa-lg"></span> Cours et Marchés</NavLink>
            {/* <Nav.Link href="#cultures">Cultures</Nav.Link>
            <Nav.Link href="#elevrage">Elevrage</Nav.Link>
            <Nav.Link href="#materiels">Tracteurs et Materiels</Nav.Link> */}
            <NavLink className="nav-link"  to='/gestion'><span className="fa fa-file-text fa-lg"></span> Gestion et Droit</NavLink>
            </Nav>
        </Navbar.Collapse>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className = "button" variant="outline-success">Search</Button>
        </Form>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#signup"><Button className="button" variant="outline-info"> S'abonner</Button></a></li>
            <li><a href="#login"><Button className="button" variant="outline-info"> Connexion</Button></a></li>
        </ul>
        </Navbar>
    </div>
)
