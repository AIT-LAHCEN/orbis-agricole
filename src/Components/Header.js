import React, {Component} from 'react';
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTractor, faPaw, faSeedling, faFileAlt, faNewspaper, faChartLine, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Header extends Component {


    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleLogin(event) {
        this.toggleModal();
        event.preventDefault();
        alert(this.username.value);
        axios.post(
            `http://localhost:8080/login`,
            {"username":this.username.value,"password":this.password.value},
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).then(() => {
            console.log("user loged in successfully");
          }).catch(err => {
            console.log(err);
          });
    }

    render() {

        return(
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
                            <li><NavLink to="/login"><Button outline onClick={this.toggleModal} className="button" variant="outline-success"> Connexion</Button></NavLink></li>
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
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/cours_marches'><FontAwesomeIcon icon={faChartLine} /> COURS ET MARCHÉS</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/cultures"><FontAwesomeIcon icon={faSeedling} /> CULTURES</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/elevage"><FontAwesomeIcon icon={faPaw} /> ÉLVEAGE</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to="/materiels"><FontAwesomeIcon icon={faTractor} /> TRACTEURS ET MATÉRIELS</NavLink>
                        <NavLink className="nav-link border-right non-active-pill" activeClassName="pill" to='/gestion'><FontAwesomeIcon icon={faFileAlt} /> GESTION ET DROIT</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
                <ModalHeader toggle={this.toggleModal}>Connexion</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
        );
    }
}

export default Header;