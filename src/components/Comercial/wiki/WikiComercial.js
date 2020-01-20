import React, { Component } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../NavBar/SideBar";
import NavBar from "../NavBar/NavBar";
import BaseConocimiento from "../BaseConocimiento/BaseConocimiento";
export default class WikiComercial extends Component {
  render() {
    return (
      <div>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          userName={this.props.userName}
          changeIsLoggedIn={this.props.changeIsLoggedIn}
        />
        <Container fluid style={{ height: "35rem" }}>
          <Row className="mr-0" style={{ height: "100%" }}>
            <SideBar></SideBar>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 p-0">
              <Container fluid className="pl-0" style={{ height: "100%" }}>
                <this.wikicomercial />
              </Container>
            </main>
          </Row>
        </Container>
      </div>
    );
  } //

  wikicomercial = () => {
    let match = useRouteMatch();
    const userName = this.props.userName;
    return (
      //SWITCH CONDICIONAL
      <Switch>
        <Route exact path={match.url}>
          <Container className="mx-auto">
              <h1 className="mt-3">Base Conocimiento Clip Tecnologia</h1>
              <h3>Modulo: Comercial</h3>
          </Container>
        </Route>
        <Route path={`${match.url}/kbcomercial`}>
          <BaseConocimiento userName={userName}/>
        </Route>
      </Switch>
    );
  };
}
