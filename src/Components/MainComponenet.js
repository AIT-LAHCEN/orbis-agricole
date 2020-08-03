import React , { Component } from 'react';
import {Header} from './Header';
import Accueil from './Accueil';
import News from './News';
import Articledetail from './ArticledetailComponent';
// import Videos from './Videos';
// import Exploitation from './Exploitation'
import Footer from './Footer';
import {Meteo} from './Meteo';
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
      
        <div className="App">
          <Header/>
          <Switch>
              <Route path='/meteo' component={Meteo} />
              <Route exact path='/news' component={() => <News articles={this.state.articles}/>} />
              <Route path='/news/:articleId' component={ArticleWithId} />
              <Route exact path='/home' component={Accueil} />
              <Redirect to="/home" />
          </Switch>
          {/* <Exploitation/>
          <Videos/> */}
          <Footer/>
        </div>
      
    );
  }
}

export default Main;