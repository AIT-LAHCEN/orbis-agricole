import React , { Component } from 'react';
import Main from './Components/MainComponenet';
// import EspaceAdmin from './Components/EspaceAdmin';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter} from 'react-router-dom';
import "./App.css";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {

  render() {
    return(
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Main/>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;