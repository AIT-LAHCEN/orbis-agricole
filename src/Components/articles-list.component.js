import React, { Component } from "react";
import articleDataService from "../services/article.service";
import { Link } from "react-router-dom";

export default class articlesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievearticles = this.retrievearticles.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivearticle = this.setActivearticle.bind(this);
    this.removeAllarticles = this.removeAllarticles.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      articles: [],
      currentarticle: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrievearticles();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrievearticles() {
    articleDataService.getAll()
      .then(response => {
        this.setState({
          articles: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievearticles();
    this.setState({
      currentarticle: null,
      currentIndex: -1
    });
  }

  setActivearticle(article, index) {
    this.setState({
      currentarticle: article,
      currentIndex: index
    });
  }

  removeAllarticles() {
    articleDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    articleDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          articles: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, articles, currentarticle, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recherche par titre"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>La listes des articles</h4>

          <ul className="list-group">
            {articles &&
              articles.map((article, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivearticle(article, index)}
                  key={index}
                >
                  {article.title}
                </li>
              ))}
          </ul>

          {/* <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllarticles}
          >
            Supprimer 
          </button> */}
        </div>
        <div className="col-md-6">
          {currentarticle ? (
            <div>
              <h4>article</h4>
              <div>
                <label>
                  <strong>Titre:</strong>
                </label>{" "}
                {currentarticle.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentarticle.description}
              </div>
              <div>
                <label>
                  <strong>Thème:</strong>
                </label>{" "}
                {currentarticle.theme}
              </div>
              <div>
                <label>
                  <strong>contenu:</strong>
                </label>{" "}
                {currentarticle.contenu}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentarticle.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/admin/articles/" + currentarticle.id}
                className="badge badge-warning"
              >
                Modifier
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Clicker sur un article SVP...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}