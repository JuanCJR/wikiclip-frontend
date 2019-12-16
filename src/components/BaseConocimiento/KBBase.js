import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Card, Button, ListGroup, Table } from "react-bootstrap";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import NuevoArticulo from "./NuevoArticulo";
export default class KBBase extends Component {
  render() {
    return <this.kbbase />;
  }

  kbbase = () => {
    let match = useRouteMatch();
    let history = useHistory();
    return (
      <Switch>
        {/* KB Home */}
        <Route exact path={match.path}>
          <Container fluid className="p-0">
            <Row className="m-0">
              <Col className="p-0">
                <Card>
                  <Card.Header>
                    <h3>Base de Conocimiento</h3>
                    <Button
                      onClick={() => {
                        history.push(`${match.url}/newkb`);
                      }}
                      variant="dark"
                    >
                      Agregar Item
                    </Button>
                  </Card.Header>
                  <Container fluid className="p-0 m-0">
                    <Row className="m-0">
                      <Col xs={2} className="p-0">
                        <Card className="m-0 p-0" style={{ height: "30rem" }}>
                          <Card.Body className="p-0">
                            <ListGroup>
                              <ListGroup.Item className="p-0">
                                <Button
                                  variant="outline-info"
                                  style={{ width: "100%", border: "0" }}
                                  onClick={() => {}}
                                >
                                  Item 1
                                </Button>
                              </ListGroup.Item>
                              <ListGroup.Item className="p-0">
                                <Button
                                  variant="outline-info"
                                  style={{ width: "100%", border: "0" }}
                                  onClick={() => {}}
                                >
                                  Item 2
                                </Button>
                              </ListGroup.Item>
                              <ListGroup.Item className="p-0">
                                <Button
                                  variant="outline-info"
                                  style={{ width: "100%", border: "0" }}
                                  onClick={() => {}}
                                >
                                  Item 3
                                </Button>
                              </ListGroup.Item>
                              <ListGroup.Item className="p-0">
                                <Button
                                  variant="outline-info"
                                  style={{ width: "100%", border: "0" }}
                                  onClick={() => {}}
                                >
                                  Item 4
                                </Button>
                              </ListGroup.Item>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col className="p-0">
                        <div>
                          <Table>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Titulo</th>
                                <th>Descripcion</th>
                                <th>Autor</th>
                              </tr>
                            </thead>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Container>
        </Route>

        {/* New Item */}

        <Route exact path={`${match.url}/newkb`}>
        {console.log(match.url)}
          <NuevoArticulo/>
        </Route>
      </Switch>
    );
  };
}
