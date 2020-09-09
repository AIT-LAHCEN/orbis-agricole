import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import axios from 'axios';

// const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = (val) => new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(val);

class Register extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Incsription réussite');
        axios.post(
            `http://localhost:8080/api/auth/inscription`,
            values,
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).then(() => {
            console.log("user added successfully");
            console.log(values);
          }).catch(err => {
            console.log(err);
          });
    }
  
    render() {
        return (
            <div className="container inscription">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Remplir vos informations</h3>
                    </div>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                                model="user"
                                validators={{
                                    '': {
                                        passwordsMatch: (vals) => vals.password === vals.repassword,
                                    }
                                }}>
                                <Row className="form-group">
                                    <Label htmlFor="username" md={4}>Identifiant</Label>
                                    <Col md={8}>
                                        <Control.text model=".username" id="username" name="username"
                                            placeholder="Entrer votre nom d'utilisatuer"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(3), maxLength: maxLength(20)
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".username"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    minLength: <div className="alert alert-danger" role="alert">Doit contenir plus de 2 caractères</div>,
                                                    maxLength: <div className="alert alert-danger" role="alert">Ne dépassez pas 20 caractères</div>
                                                }}
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="fullname" md={4}>Nom complet</Label>
                                    <Col md={8}>
                                        <Control.text model=".fullname" id="fullname" name="fullname"
                                            placeholder="Entrer votre nom complet"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(3), maxLength: maxLength(20)
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".fullname"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    minLength: <div className="alert alert-danger" role="alert">Doit contenir plus de 4 caractères</div>,
                                                    maxLength: <div className="alert alert-danger" role="alert">Ne dépassez pas 20 caractères</div>
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
                                                validEmail
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    validEmail: <div className="alert alert-danger" role="alert">Adresse e-mail invalide</div>
                                                }}
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="telephone" md={4}>Contact Tel.</Label>
                                    <Col md={8}>
                                        <Control.text model=".telephone" id="telephone" name="telephone"
                                            placeholder="Entrer votre numéro de mobile"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(2), maxLength: maxLength(13), isNumber
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".telephone"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    minLength: <div className="alert alert-danger" role="alert">Doit contenir plus d'un numéro</div>,
                                                    maxLength: <div className="alert alert-danger" role="alert">Ne dépassez pas 13 numéros</div>,
                                                    isNumber: <div className="alert alert-danger" role="alert">Doit être un nombre</div>
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
                                                validPassword
                                            }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".password"
                                                show="touched"
                                                messages={{
                                                    required: 'Obligatoire ',
                                                    validPassword: <div className="alert alert-danger" role="alert">Le mot de passe doit contenir au moins un caractère majuscule, minuscule, numéro et un caractère spécial au total 8 caractères ou plus</div>
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
                                            />
                                            <Errors
                                                className="text-danger"
                                                model="user"
                                                show="touched"
                                                messages={{
                                                    passwordsMatch: <div className="alert alert-danger" role="alert">Les mots de passe ne correspondent pas</div>
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

  export default Register;