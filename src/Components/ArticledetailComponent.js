import React, { Component } from "react";
import articleDataService from "../services/article.service";
import { Media, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import Loader from 'react-loader-spinner';
import AuthService from "../services/auth.service";

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
      currentUser: undefined,
    };
  }

  componentDidMount() {
    this.getarticle(this.props.match.params.id);
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
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
    const { currentarticle, currentUser } = this.state;

    return (
      <React.Fragment>
      {currentUser ? (
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
                            height={100}
                            width={100}
                            timeout={1000} //3 secs
                    
                        />
            {currentarticle ? (
            <div key={currentarticle.id} className="col-12 mt-5">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Media tag="li">
                    <div className="MyMedia">
                      <Media left middle className="ImageDetailNews">
                          {currentarticle.id ? <Media object style={{width : '30em' , height : '20em' }} src={`https://orbisagroindustry.live/api/v1/article/${currentarticle.id}/image/download`} alt={currentarticle.title}/> : null }
                      </Media>
                      <Media body className="ml-5">
                        <Media heading style={{fontSize : '30px'}}>{currentarticle.description}</Media>
                        <p className="Myparagraph">{currentarticle.contenu}</p>
                      </Media>
                    </div>
                </Media>
            </FadeTransform>
        </div>            
            ) : (
            <div>
                <br />
                <p>Un problème est survenue, veuillez actualiser la page SVP</p>
            </div>
            )}
            </div> 
      </div> ) : ( 
      <div className="container">
        <header className="jumbotron">
          <h3>Si vous êtes abonné, cliquez <Link to="/login">ici</Link> pour vous connecter et poursuivre la lecture</h3>
        </header>
      </div>
      )}
      </React.Fragment>
    );
  }
}