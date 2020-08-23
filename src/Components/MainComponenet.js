import React , { Component } from 'react';
import Header from './Header';
import Accueil from './Accueil';
import News from './News';
import Articledetail from './ArticledetailComponent';
import Addarticle from "./add-article.component";
import article from "./article.component";
import articlesList from "./articles-list.component";
import Footer from './Footer';
import Meteo from './Meteo';
import Gestion from './Gestion';
import Materiels from './Materiels';
import Cours_Marches from './Marche_Stats';
import Cultures from './Cultures';
import Elevage from './Elevage';
import Inscription from './Inscription';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}


class Main extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    const ArticleWithId = ({match}) => {
      return(
        <Articledetail article={this.props.articles.filter((article) => article.id === parseInt(match.params.articleId,10))[0]} />
      );
    }

    return(
        <React.Fragment>
          <Header/>
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                  <Route path='/meteo' component={Meteo} />
                  <Route path='/gestion' component={Gestion} />
                  <Route path='/materiels' component={Materiels} />
                  <Route path='/cultures' component={Cultures} />
                  <Route path='/cours_marches' component={Cours_Marches} />
                  <Route path='/elevage' component={Elevage} />
                  <Route path='/signup' component={Inscription} />
                  <Route exact path='/news' component={() => <News articles={this.props.articles}/>} />
                  <Route path='/news/:articleId' component={ArticleWithId} />
                  <Route exact path="/articles" component={articlesList} />
                  <Route exact path="/add" component={Addarticle} />
                  <Route path="/articles/:id" component={article} />
                  <Route exact path='/home' component={Accueil} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer/>
        </React.Fragment>
      
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));