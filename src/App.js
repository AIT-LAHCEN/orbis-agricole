import React , { Component } from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Videos from './Components/Videos';
import Exploitation from './Components/Exploitation'
import Footer from './Components/Footer';
import "./App.css";

class App extends Component {

  render() {
    return(
      <div className="App">
        <Header/>
        <News/>
        <Exploitation/>
        <Videos/>
        <Footer/>
      </div>
    );
  }
}

export default App;