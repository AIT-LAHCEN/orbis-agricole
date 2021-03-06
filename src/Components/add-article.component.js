import React, { Component } from "react";
import articleDataService from "../services/article.service";
import {Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { FormControl } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


export default class Addarticle extends Component {

  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTheme = this.onChangeTheme.bind(this);
    this.onChangeContenu = this.onChangeContenu.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.savearticle = this.savearticle.bind(this);
    this.newarticle = this.newarticle.bind(this);

    this.state = {
      id: null,
      title: "",
      theme: "cultures",
      description: "",
      contenu: "", 
      articleImageLink: "",
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }

  onChangeContenu(e) {
    this.setState({
      contenu: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  savearticle() {
    var data = {
      title: this.state.title,
      theme: this.state.theme,
      description: this.state.description,
      contenu: this.state.contenu,
      articleImageLink: ""
    };

    articleDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          theme: response.data.theme,
          description: response.data.description,
          contenu: response.data.contenu,
          articleImageLink: response.data.articleImageLink,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newarticle() {
    this.setState({
      id: null,
      title: "",
      theme: "",
      description: "",
      contenu: "",
      articleImageLink: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      
      <div className="row row-content">
        <div className="col-12 morepadd">
          <h3>Ajouter un article (Etape 1/2...)</h3>
        </div>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newarticle}>
              Add
            </button>
          </div>
        ) : (
          <div className="col-12 col-md-9 padd3">
            <Form>
              <FormGroup row>
                <Label htmlFor="title" md={2}>Titre</Label>
                <Col md={10}>
                  <Input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    name="title"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="description" md={2}>Description</Label>
                <Col md={10}>
                  <Input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.discrition}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label htmlFor="theme" md={2}>Theme</Label>
                <Col md={10}>
                  <FormControl as="select" value={this.state.value} onChange={this.onChangeTheme}>
                    <option selected value="cultures">Cultures</option>
                    <option value="élevage">Élevage</option>
                    <option value="matériels">Tracteurs et Matériels</option>
                    <option value="gestion">Gestion et Droit</option>
                  </FormControl>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="contenu" md={2}>Contenu</Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    rows="12"
                    className="form-control"
                    id="contenu"
                    required
                    value={this.state.contenu}
                    onChange={this.onChangeContenu}
                    name="contenu"
                  />
                </Col>
              </FormGroup>
              
              <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                  <NavLink to="/admin/addImage">
                    <Button type="submit" className="btn btn-success" onClick={this.savearticle}>
                      Suivant
                    </Button>
                  </NavLink>
                </Col>
              </FormGroup>
            </Form>
          </div>
        )}
      </div>
    );
  }
}