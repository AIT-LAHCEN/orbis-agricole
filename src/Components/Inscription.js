import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Inscription extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
  
    render() {
        return (
            <div classNmae="container">
                <div className="row row-content">
                    <div className="col-12 padd">
                        <h3>Remplir vos informations</h3>
                    </div>
                        <div className="col-12 col-md-9 padd">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={4}>Nom</Label>
                                    <Col md={8}>
                                        <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="Entrer votre nom"
                                            className="form-control"
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastname" md={4}>Prénom</Label>
                                    <Col md={8}>
                                        <Control.text model=".lastname" id="lastname" name="lastname"
                                            placeholder="Entrer votre prénom"
                                            className="form-control"
                                            />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="telnum" md={4}>Contact Tel.</Label>
                                    <Col md={8}>
                                        <Control.text model=".telnum" id="telnum" name="telnum"
                                            placeholder="Entrer votre numéro de mobile"
                                            className="form-control"
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={4}>Email</Label>
                                    <Col md={8}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Entrer votre adresse e-mail"
                                            className="form-control"
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 5, offset: 4}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree"
                                                    name="agree"
                                                    className="form-check-input"
                                                    /> {' '}
                                                <strong>Pouvons-nous vous contacter ?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{size: 2, offset: 1}}>
                                        <Control.select model=".contactType" name="contactType"
                                                className="form-control">
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="password" md={4}>Mot de passe</Label>
                                    <Col md={8}>
                                        <Control.text model=".password" id="password" name="password"
                                            placeholder="Entrer votre mot de passe"
                                            className="form-control"
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="password" md={4}>Confirmation de mot de passe</Label>
                                    <Col md={8}>
                                        <Control.text model=".password" id="password" name="password"
                                            placeholder="Retaper le mot de passe"
                                            className="form-control"
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 8, offset: 4}}>
                                        <Button type="submit" color="primary">
                                            S'inscrire
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                </div>
            </div>
      );
    }
  }

  export default Inscription;