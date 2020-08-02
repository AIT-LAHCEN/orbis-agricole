import React , { Component } from 'react';
import {Header} from './Header';
import News from './News';
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


    return(
      
        <div className="App">
          <Header/>
          <Switch>
              <Route path='/meteo' component={Meteo} />
              <Route exact path='/news' component={() => <News articles={this.state.articles}/>} />
              <Redirect to="/news" />
          </Switch>
          {/* <Exploitation/>
          <Videos/> */}
          <Footer/>
        </div>
      
    );
  }
}

export default Main;