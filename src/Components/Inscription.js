import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import MyToast from "./MyToast";
import axios from 'axios';

// const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = (val) => new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})").test(val);

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show : false,
            errorFlag : false,
            errorMessage:'',

        };

        this.handleSubmit = this.handleSubmit.bind(this);

        
    }


    handleSubmit(values) {

        console.log('Current State is: ' + JSON.stringify(values));
        axios.post(
            `http://localhost:8080/api/auth/inscription`,
            values,
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).then(result => {
              this.setState({"show" : true});
              console.log("user added successfully", result.data.message);
              console.log(values);
              setTimeout(() => this.setState({"show": false }), 5000);
          }).catch(err => {
              this.setState({ "errorFlag": true });
              this.setState({ "errorMessage": err.response.data.message })
              console.log(err.response.data.message);
              setTimeout(() => this.setState({ "show": false }), 5000);
          });
    }
  
    render() {
        return (

            <div>
                <div >

                    <div>
                        <MyToast children={{ show: this.state.show, message: "User added successfully", errorFlag: this.state.errorFlag, errorMessage: this.state.errorMessage}}/>
                    </div>


                    <div className="container inscription">
                        <div className="row row-content">
                            <div className="col-12 mt-5 mb-2">
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
                                                placeholder="Entrer votre identifiant pour la connexion"
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
                                                autoComplete="off"
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
                                                placeholder="Entrer votre numéro de telephone"
                                                className="form-control"
                                                autoComplete="off"
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
                                                    validPassword: <div className="alert alert-danger" role="alert">Le mot de passe doit contenir au moins un caractère majuscule, minuscule, numéro au total 5 caractères ou plus</div>
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
                                        <Col md={{ size: 8, offset: 10 }}>
                                            <Button type="submit" className="btn btn-success">
                                                S'inscrire
                                        </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
      );
    }
  }

export default Register;