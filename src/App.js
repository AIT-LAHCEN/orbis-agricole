import React , { Component } from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Videos from './Components/Videos';
import Exploitation from './Components/Exploitation'
import Footer from './Components/Footer';
import "./App.css";
import { ARTICLES } from './Shared/articles';

class App extends Component {

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
        <News articles={this.state.articles}/>
        <Exploitation/>
        <Videos/>
        <Footer/>
      </div>
    );
  }
}

export default App;