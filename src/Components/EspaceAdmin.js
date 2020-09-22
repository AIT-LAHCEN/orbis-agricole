import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Addarticle from "./add-article.component";
import article from "./article.component";
import articlesList from "./articles-list.component";
import addImage from './addImage';
import usersList from './users-list.component';
import User from './User';

class EspaceAdmin extends Component {
    render() {
      return (
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <span className="fa fa-cogs fa-lg" style={{ color: "white" }}></span>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/admin/articles"} className="nav-link">
                    Liste des articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin/add"} className="nav-link">
                    Ajouter un article
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin/users"} className="nav-link">
                    Liste des utilisateurs
                  </Link>
                </li>
              </div>
            </nav>
  
            <div className="container mt-3">
              <Switch>
                <Route exact path="/admin/users" component={usersList} />
                <Route exact path="/admin/articles" component={articlesList} />
                <Route exact path="/admin/add" component={Addarticle} />
                <Route exact path="/admin/addImage" component={addImage} />
                <Route path="/admin/edit/:id" exact component={User}/>
                <Route path="/admin/articles/:id" component={article} />
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default EspaceAdmin;