import React , { Component } from 'react';
import Header from './Header';
import Accueil from './Accueil';
import News from './News';
import Articledetail from './ArticledetailComponent';
// import Videos from './Videos';
// import Exploitation from './Exploitation'
import Footer from './Footer';
import Meteo from './Meteo';
import Gestion from './Gestion';
import Materiels from './Materiels';
import Cultures from './Cultures';
import Elevage from './Elevage';
import Inscription from './Inscription';
import { ARTICLES } from '../Shared/articles';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: ARTICLES
    };
  }

  render() {

    const ArticleWithId = ({match}) => {
      return(
        <Articledetail article={this.state.articles.filter((article) => article.id === parseInt(match.params.articleId,10))[0]} />
      );
    }

    return(
        <React.Fragment>
          <Header/>
          <Switch>
              <Route path='/meteo' component={Meteo} />
              <Route path='/gestion' component={Gestion} />
              <Route path='/materiels' component={Materiels} />
              <Route path='/cultures' component={Cultures} />
              <Route path='/elevage' component={Elevage} />
              <Route path='/signup' component={Inscription} />
              <Route exact path='/news' component={() => <News articles={this.state.articles}/>} />
              <Route path='/news/:articleId' component={ArticleWithId} />
              <Route exact path='/home' component={Accueil} />
              <Redirect to="/home" />
          </Switch>
          {/* <Exploitation/>
          <Videos/> */}
          <Footer/>
        </React.Fragment>
      
    );
  }
}

export default Main;