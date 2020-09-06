import React , { Component } from 'react';
import Main from './Components/MainComponenet';
import EspaceAdmin from './Components/EspaceAdmin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {

  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
                <Route path={["/orbis-agricole", "/cultures", "/cours_marches", "/meteo", "/elevage","/materiels","/gestion","/signup","/login","/news", "/home"]} component={Main} />
                <Route path="/admin" component={EspaceAdmin} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;