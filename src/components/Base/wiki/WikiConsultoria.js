import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NavBarConsultoria from "../NavBar/NavBarConsultoria";
import { Card, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
export default class WikiConsultoria extends Component {
  render() {
    return <this.wiki />;
  }

  wiki = () => {
    let match = useRouteMatch();
    return (
      <Container fluid className="p-0">
        {/* SWITCH CONDICIONAL */}

        <Switch>
          <Route exact path={match.path}>
            <NavBarConsultoria />
            {/* Fila 1 */}
            <Row>
              {/* Columna 1 */}
              <Col style={{ flexGrow: "0" }}>
                <Card
                  className="mt-3 ml-4"
                  style={{ width: "28rem", height: "33rem" }}
                >
                  <Card.Header>Estado de aplicativos demos</Card.Header>
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
                      <Card.Header>Estado de Servidores</Card.Header>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                  <Col style={{ flexGrow: "0" }}>
                    <Card
                      className="mt-3"
                      style={{ width: "25rem", height: "16rem" }}
                    >
                      <Card.Header>Subidas Recientes</Card.Header>
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
                      <Card.Header>Estado de proyectos</Card.Header>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Route>
          {/* Ruteo a base de conocimiento */}
          <Route path={`${match.url}/kb`}>
            <NavBarConsultoria />
            <div>KB</div>
          </Route>
          {/* Ruteo a Aplicativos */}
          <Route path={`${match.url}/:aplicativo`}>
              <this.handleAplicativo/>
          </Route>
          {/* Ruteo a Servidores */}
          <Route></Route>
        </Switch>
      </Container>
    );
  };

  handleAplicativo=()=>{
    let {aplicativo} = useParams();
    return <h1>{aplicativo}</h1>
  }
}
