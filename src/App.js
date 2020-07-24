import React from 'react';
import { Button,Nav,Navbar,Form,FormControl } from 'react-bootstrap';

function App(){
  return(
    <div class="header-bar clearfix">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Orbis Agricole</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Actualités</Nav.Link>
          <Nav.Link href="#meteo">Météo</Nav.Link>
          <Nav.Link href="#marches">Cours et Marchés</Nav.Link>
          <Nav.Link href="#cultures">Cultures</Nav.Link>
          <Nav.Link href="#elevrage">Elevrage</Nav.Link>
          <Nav.Link href="#materiels">Tracteurs et Materiels</Nav.Link>
          <Nav.Link href="#gestion">Gestion et Droit</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
        </Form>
        <ul class="nav navbar-nav navbar-right">
          
          <li><a href="#signup"><Button variant="outline-info"> S'abonner</Button></a></li>
          <li><a href="#login"><Button variant="outline-info"> Connexion</Button></a></li>
        </ul>
      </Navbar>
    </div>
  );
}

export default App;