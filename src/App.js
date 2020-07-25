import React , { Component } from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Videos from './Components/Videos';
import "./App.css";

class App extends Component {

  render() {
    return(
      <div className="App">
        <Header/>
        <News/>
        <Videos/>
      </div>
    );
  }
}

export default App;