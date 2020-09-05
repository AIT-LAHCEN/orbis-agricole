import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Addarticle from "./add-article.component";
import article from "./article.component";
import articlesList from "./articles-list.component";
import addImage from './addImage';

class EspaceAdmin extends Component {
    render() {
      return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/articles" className="navbar-brand">
                Espace Admin
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/articles"} className="nav-link">
                    Liste de articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Ajouter un article
                  </Link>
                </li>
              </div>
            </nav>
  
            <div className="container mt-3">
              <Switch>
                <Route exact path="/articles" component={articlesList} />
                <Route exact path="/add" component={Addarticle} />
                <Route exact path="/addImage" component={addImage} />
                <Route path="/articles/:id" component={article} />
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default EspaceAdmin;