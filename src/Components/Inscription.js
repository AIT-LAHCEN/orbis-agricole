import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = (val) => new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(val);

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
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(20)
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".firstname"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    minLength: 'Doit contenir plus de 2 caractères',
                                                    maxLength: 'Ne dépassez pas 20 caractères'
                                                }}
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastname" md={4}>Prénom</Label>
                                    <Col md={8}>
                                        <Control.text model=".lastname" id="lastname" name="lastname"
                                            placeholder="Entrer votre prénom"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(20)
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".lastname"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    minLength: 'Doit contenir plus de 2 caractères',
                                                    maxLength: 'Ne dépassez pas 20 caractères'
                                                }}
                                            />
                                    </Col>                        
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="telnum" md={4}>Contact Tel.</Label>
                                    <Col md={8}>
                                        <Control.text model=".telnum" id="telnum" name="telnum"
                                            placeholder="Entrer votre numéro de mobile"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(2), maxLength: maxLength(13), isNumber
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".telnum"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    minLength: "Doit contenir plus d'un numéro ",
                                                    maxLength: 'Ne dépassez pas 13 numéros ',
                                                    isNumber: 'Doit être un nombre'
                                                }}
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={4}>Email</Label>
                                    <Col md={8}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Entrer votre adresse e-mail"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    validEmail: 'Adresse e-mail invalide'
                                                }}
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
                                        <Control.password model=".password" id="password" name="password"
                                            placeholder="Entrer votre mot de passe"
                                            className="form-control"
                                            validators={{
                                                required, validPassword
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".password"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    validPassword: 'Le mot de passe doit contenir au moins un caractère majuscule, minuscule, numéro et un caractère spécial au total 8 caractères ou plus'
                                                }}
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="repassword" md={4}>Confirmation de mot de passe</Label>
                                    <Col md={8}>
                                        <Control.password model=".repassword" id="repassword" name="repassword"
                                            placeholder="Retaper le mot de passe"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".password"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire',
                                                }}
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