import React from 'react';
import { Button,Nav,Navbar,Form,FormControl } from 'react-bootstrap';

function App(){
  return(
    <div>
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
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default App;