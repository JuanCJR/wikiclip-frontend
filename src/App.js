import React, { Component } from "react";
import Home from "./components/Home";
import Signin from "./components/User/Signin";
//import WikiBase from "./components/wiki/WikiBase";
import WikiComercial from "./components/Comercial/wiki/WikiComercial";
import "./App.css";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

export default class App extends Component {
  state = {
    userName: "",
    token: "",
    isLoggedIn: false
  };

  rescueData = (userName, token, isLoggedIn) => {
    this.setState({
      userName,
      token,
      isLoggedIn
    });
  }; //
  changeIsLoggedIn = state => {
    this.setState({
      isLoggedIn: state
    });
  };

  render() {
    return (
      <Router >
        <Switch>
          {/* Componente  Home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Componente  Signin */}
          <Route path="/signin">
            <Signin rescueData={this.rescueData} />
          </Route>
          {/* Componente  Wikibase */}
          <Route path="/wikiBase">
            {/* <WikiBase userName={this.state.userName} token={this.state.token} /> */}
          </Route>
          {/* Componente  WikiComercial */}
          <Route path="/wikiComercial">
           {this.state.isLoggedIn ?<WikiComercial
              userName={this.state.userName}
              token={this.state.token}
              isLoggedIn={this.state.isLoggedIn}
              changeIsLoggedIn={this.changeIsLoggedIn}
            />
              :
              <Redirect to="/signin" />
           }
          </Route>
        </Switch>
      </Router>
    );
  } //.
}
