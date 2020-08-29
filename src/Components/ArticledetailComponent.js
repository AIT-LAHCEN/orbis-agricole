import React, { Component } from "react";
import articleDataService from "../services/article.service";
import { Media, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import Loader from 'react-loader-spinner';

export default class Articledetail extends Component {
  constructor(props) {
    super(props);
    this.getarticle = this.getarticle.bind(this);

    this.state = {
      currentarticle: {
        id: null,
        title: "",
        description: "",
        contenu: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getarticle(this.props.match.params.id);
  }

  getarticle(id) {
    articleDataService.get(id)
      .then(response => {
        this.setState({
          currentarticle: response.data
        });
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentarticle } = this.state;

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/news'>Actualités</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{currentarticle.title}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{currentarticle.title}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
            <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={180}
                            width={180}
                            timeout={3000} //3 secs
                    
                        />
            {currentarticle ? (
            <div key={currentarticle.id} className="col-12 mt-5">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Media tag="li">
                    <Media left middle>
                        {currentarticle.id ? <Media object style={{width : '30em' }} src={`http://localhost:8080/api/v1/article/${currentarticle.id}/image/download`} alt={currentarticle.title}/> : null }
                    </Media>
                    <Media body className="ml-5">
                    <Media heading>{currentarticle.title}</Media>
                    <p>{currentarticle.contenu}</p>
                    </Media>
                </Media>
            </FadeTransform>
        </div>            
            ) : (
            <div>
                <br />
                <p>S'il vous plaît, attendez...</p>
            </div>
            )}
            </div>
      </div>
    );
  }
}