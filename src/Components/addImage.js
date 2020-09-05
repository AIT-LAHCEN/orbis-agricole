import React, { Component, useEffect, useCallback } from "react";
import { FormGroup, Label, Col, Button } from 'reactstrap';
import axios from 'axios';
import {useDropzone} from 'react-dropzone';
import { NavLink } from 'react-router-dom';

var imageLink;
var contenu2;
var date2;
var description2;
var published2;
var theme2;
var title2;

function Dropzone({ID_index}) {  
    
    const fetchArticles = () => {
        axios.get("http://localhost:8080/api/Articles").then(res => {
            console.log(res.data[res.data.length-1]);
          console.log(res.data[res.data.length-1].id);
          ID_index = res.data[res.data.length-1].id;
            contenu2 = res.data[res.data.length-1].contenu;
            date2 = res.data[res.data.length-1].date;
            description2 = res.data[res.data.length-1].description;
            published2 = res.data[res.data.length-1].published;
            theme2 = res.data[res.data.length-1].theme;
            title2 = res.data[res.data.length-1].title;
        });
      }
      useEffect(() => {
          fetchArticles();
      }, []);

  const onDrop = useCallback(acceptedFiles => {

    const file = acceptedFiles[0];
    console.log(file.name);
    imageLink=file.name;
    
    const formData = new FormData();
    formData.append("file",file);

    axios.post(
      `http://localhost:8080/api/v1/article/${ID_index}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    ).then(() => {
      // console.log("file uploaded successfully");
      console.log("Image chargé avec succès");
    }).catch(err => {
      console.log(err);
    });

    axios.put(`http://localhost:8080/api/Articles/${ID_index}`, {
        articleImageLink: imageLink,
        contenu: contenu2,
        date: date2,
        description: description2,
        published: published2,
        theme: theme2,
        title: title2,
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

  }, [ID_index]);
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <FormGroup row {...getRootProps()}>
      <Label htmlFor="theme" md={2}>Image</Label> 
      <Col md={10}>
        <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Déposez l'image ici ...</p> :
              <p>Faites glisser et déposez l'image de votre article ici, ou bien cliquez pour la sélectionner</p>
          }
      </Col>
    </FormGroup>
  )
}


export default class addImage extends Component {

    render(){
        return (
            <React.Fragment>
                <Dropzone/>
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                    <NavLink to="/add">
                        <Button type="submit" className="btn btn-success">
                        Terminer
                        </Button>
                    </NavLink>
                    </Col>
                </FormGroup>
            </React.Fragment>
        );
    }
}