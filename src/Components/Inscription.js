import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Inscription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            password: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                password: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email, password) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            password: '',
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'La longeur du nom doit etre superieur ou égal à 3';
        else if (this.state.touched.firstname && firstname.length > 30)
            errors.firstname = 'La longeur du nom doit etre inferieure ou égal à 30';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'La longeur du prénom doit etre superieur ou égal à 3';
        else if (this.state.touched.lastname && lastname.length > 20)
            errors.lastname = 'La longeur du prénom doit etre inferieure ou égal à 20';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Le numero de téléphone ne doit contenir que des nombres';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = "L'adresse e-mail doit contenir le @";

        return errors;
    }
  
    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email, this.state.password);
      return (
        <div classNmae="container">
            <div className="row row-content">
                    <div className="col-12 meteo">
                        <h3>Remplir vos informations</h3>
                    </div>
                        <div className="col-12 col-md-9 meteo">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={4}>Nom</Label>
                                    <Col md={8}>
                                        <Input type="text" id="firstname" name="firstname"
                                            placeholder="Entrer votre nom"
                                            value={this.state.firstname}
                                            valid={errors.firstname === ''}
                                            invalid={errors.firstname !== ''}
                                            onBlur={this.handleBlur('firstname')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md={4}>Prénom</Label>
                                    <Col md={8}>
                                        <Input type="text" id="lastname" name="lastname"
                                            placeholder="Entrer votre prénom"
                                            value={this.state.lastname}
                                            valid={errors.lastname === ''}
                                            invalid={errors.lastname !== ''}
                                            onBlur={this.handleBlur('lastname')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                <Label htmlFor="telnum" md={4}>Contact Tel.</Label>
                                    <Col md={8}>
                                        <Input type="tel" id="telnum" name="telnum"
                                            placeholder="Entrer votre numéro de mobile"
                                            value={this.state.telnum}
                                            valid={errors.telnum === ''}
                                            invalid={errors.telnum !== ''}
                                            onBlur={this.handleBlur('telnum')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={4}>Email</Label>
                                    <Col md={8}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Entrer votre adresse e-mail"
                                            value={this.state.email}
                                            valid={errors.email === ''}
                                            invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 5, offset: 4}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange} /> {' '}
                                                <strong>Pouvons-nous vous contacter ?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size: 2, offset: 1}}>
                                        <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="password" md={4}>Mot de passe</Label>
                                    <Col md={8}>
                                        <Input type="password" id="password" name="password"
                                            placeholder="Entrer votre mot de passe"
                                            value={this.state.password}
                                            valid={errors.password === ''}
                                            invalid={errors.password !== ''}
                                            onBlur={this.handleBlur('password')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.password}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="password" md={4}>Confirmation de mot de passe</Label>
                                    <Col md={8}>
                                        <Input type="password" id="password" name="password"
                                            placeholder="Retaper le mot de passe"
                                            value={this.state.password}
                                            valid={errors.password === ''}
                                            invalid={errors.password !== ''}
                                            onBlur={this.handleBlur('password')}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.password}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 8, offset: 4}}>
                                        <Button type="submit" color="primary">
                                            S'inscrire
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                </div>
            </div>
      );
    }
  }

  export default Inscription;