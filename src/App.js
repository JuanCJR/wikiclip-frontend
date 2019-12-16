import React, { Component } from "react";
import Home from "./components/Home";
import Signin from "./components/User/Signin";
import WikiBase  from './components/wiki/WikiBase';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Componente  Home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Componente  Signin */}
          <Route path="/signin">
            <Signin />
          </Route>
          {/* Componente  Signin */}
          <Route path="/wikiBase">
            <WikiBase/>
          </Route>
        </Switch>
      </Router>
    );
  } //.
}
