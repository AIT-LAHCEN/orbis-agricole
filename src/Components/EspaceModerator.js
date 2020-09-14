import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Addarticle from "./add-article.component";
import article from "./article.component";
import articlesList from "./articles-list.component";
import addImage from './addImage';

class EspaceModerator extends Component {
    render() {
      return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <span className="fa fa-cogs fa-lg" style={{ color: "white" }}></span>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/mod/articles"} className="nav-link">
                    Liste des articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/mod/add"} className="nav-link">
                    Ajouter un article
                  </Link>
                </li>
              </div>
            </nav>
  
            <div className="container mt-3">
              <Switch>
                <Route exact path="/mod/articles" component={articlesList} />
                <Route exact path="/mod/add" component={Addarticle} />
                <Route exact path="/mod/addImage" component={addImage} />
                <Route path="/mod/articles/:id" component={article} />
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default EspaceModerator;