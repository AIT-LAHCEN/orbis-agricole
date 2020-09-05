import React, { Component } from "react";
import articleDataService from "../services/article.service";

export default class article extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTheme = this.onChangeTheme.bind(this);
    this.onChangeContenu = this.onChangeContenu.bind(this);
    this.getarticle = this.getarticle.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updatearticle = this.updatearticle.bind(this);
    this.deletearticle = this.deletearticle.bind(this);

    this.state = {
      currentarticle: {
        id: null,
        title: "",
        description: "",
        theme: "",
        contenu: "",
        articleImageLink : "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getarticle(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentarticle: {
          ...prevState.currentarticle,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentarticle: {
        ...prevState.currentarticle,
        description : description
      }
    }));
  }

  onChangeTheme(e) {
    const theme = e.target.value;
    
    this.setState(prevState => ({
      currentarticle: {
        ...prevState.currentarticle,
        theme : theme
      }
    }));
  }

  onChangeContenu(e) {
    const contenu = e.target.value;
    
    this.setState(prevState => ({
      currentarticle: {
        ...prevState.currentarticle,
        contenu: contenu
      }
    }));
  }

  getarticle(id) {
    articleDataService.get(id)
      .then(response => {
        this.setState({
          currentarticle: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentarticle.id,
      title: this.state.currentarticle.title,
      description: this.state.currentarticle.description,
      theme: this.state.currentarticle.theme,
      contenu: this.state.currentarticle.contenu,
      articleImageLink: this.state.currentarticle.articleImageLink,
      published: status
    };

    articleDataService.update(this.state.currentarticle.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentarticle: {
            ...prevState.currentarticle,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatearticle() {
    articleDataService.update(
      this.state.currentarticle.id,
      this.state.currentarticle
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The article was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletearticle() {    
    articleDataService.delete(this.state.currentarticle.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/articles')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentarticle } = this.state;

    return (
      <div>
        {currentarticle ? (
          <div className="edit-form">
            <h4>article</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentarticle.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentarticle.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="theme">Thème</label>
                <select
                  className="form-control"
                  id="theme"
                  value={currentarticle.theme}
                  onChange={this.onChangeTheme}>
                  <option value="cultures">Cultures</option>
                  <option value="élevage">Élevage</option>
                  <option value="matériels">Tracteurs et Matériels</option>
                  <option value="gestion">Gestion et Droit</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contenu">Contenu</label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="contenu"
                  value={currentarticle.contenu}
                  onChange={this.onChangeContenu}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentarticle.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentarticle.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deletearticle}
            >
              Supprimer
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatearticle}
            >
              Modifier
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Veuillez cliquer sur un article...</p>
          </div>
        )}
      </div>
    );
  }
}