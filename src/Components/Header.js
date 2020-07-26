import React, { Component } from 'react';
import { Button,Nav,Navbar,Form,FormControl } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="nav">
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><h1 className="title">Orbis Agricole</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Actualités</Nav.Link>
                    <Nav.Link href="#meteo">Météo</Nav.Link>
                    <Nav.Link href="#marches">Cours et Marchés</Nav.Link>
                    <Nav.Link href="#cultures">Cultures</Nav.Link>
                    <Nav.Link href="#elevrage">Elevrage</Nav.Link>
                    <Nav.Link href="#materiels">Tracteurs et Materiels</Nav.Link>
                    <Nav.Link href="#gestion">Gestion et Droit</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button className = "button" variant="outline-success">Search</Button>
                </Form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#signup"><Button className="button" variant="outline-info"> S'abonner</Button></a></li>
                    <li><a href="#login"><Button className="button" variant="outline-info"> Connexion</Button></a></li>
                </ul>
                </Navbar>
            </div>
        );
    }
}

export default Header;