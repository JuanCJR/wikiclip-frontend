import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NavBarBase from "../NavBar/NavBarBase";
import { Card } from "react-bootstrap";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import KBBase from "../BaseConocimiento/KBBase";

export default class WikiBase extends Component {
  


  render() {
    return <this.wiki />;
  }

  wiki = () => {
    let match = useRouteMatch();
    const userName = this.props.userName;

    return (
      <Container fluid className="p-0">
        {/* SWITCH CONDICIONAL */}

        <Switch>
          <Route exact path={match.path}>
            <NavBarBase />
            {/* Fila 1 */}
            <Row>
              {/* Columna 1 */}
              <Col style={{ flexGrow: "0" }}>
                <Card
                  className="mt-3 ml-4"
                  style={{ width: "28rem", height: "33rem" }}
                >
                  <Card.Header>Panel 1</Card.Header>
                  <Card.Body></Card.Body>
                </Card>
              </Col>

              {/* Columna 2 */}
              <Col>
                <Row>
                  <Col style={{ flexGrow: "0" }}>
                    <Card
                      className="mt-3"
                      style={{ width: "25rem", height: "16rem" }}
                    >
                      <Card.Header>Panel 3</Card.Header>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                  <Col style={{ flexGrow: "0" }}>
                    <Card
                      className="mt-3"
                      style={{ width: "25rem", height: "16rem" }}
                    >
                      <Card.Header>Panel 4</Card.Header>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ flexGrow: "0" }}>
                    <Card
                      className="mt-3"
                      style={{ width: "52rem", height: "16rem" }}
                    >
                      <Card.Header>Panel 5</Card.Header>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Route>
          {/* Ruteo a base de conocimiento */}
          <Route path={`${match.url}/kbbase`}>
            <NavBarBase />
           
            <KBBase userName={userName} token={this.props.token}/>
          </Route>
          {/* Ruteo a Aplicativos */}
          <Route path={`${match.url}/:aplicativo`}>
            <this.handleAplicativo />
          </Route>
          {/* Ruteo a Servidores */}
          <Route></Route>
        </Switch>
      </Container>
    );
  };

  handleAplicativo = () => {
    let { aplicativo } = useParams();
    return <h1>{aplicativo}</h1>;
  };
}
