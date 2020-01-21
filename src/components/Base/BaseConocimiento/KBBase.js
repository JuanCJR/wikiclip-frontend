import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Card, Button, Table } from "react-bootstrap";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import NuevoArticulo from "./NuevoArticulo";
import KbService from "../services/KbService";
import Article from './Article'
export default class KBBase extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    const kbservice = new KbService();
    const articles = await kbservice.renderArticles();
    this.setState({
      articles
    });
  } //.
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
                      {/* <Col xs={2} className="p-0">
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
                      </Col> */}
                      <Col className="p-0">
                        <div>
                          <Table>
                            <thead>
                              <tr>
                                <th>Titulo</th>
                                <th>Descripcion</th>
                                <th>Autor</th>
                              </tr>
                            </thead>
                            <this.articles />
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

        <Route path={`${match.url}/newkb`}>
          <NuevoArticulo
            userName={this.props.userName}
            token={this.props.token}
          />
        </Route>

        {/* Render Item */}
        <Route exact path={`${match.url}/:_id`}>
          <this.oneArticle/>
        </Route>
      </Switch>
    );
  }; //.

  oneArticle =  () => {
    const kbservice = new KbService();
    let { _id } = useParams();
    return <Article _id={_id}/>;
  };

  articles = () => {
    const history = useHistory();
    const match = useRouteMatch();
    if (this.state.articles.length) {
      return (
        <tbody>
          {this.state.articles.map(articles => (
            <tr key={articles._id}>
              <td>{articles.title}</td>
              <td>{articles.description}</td>
              <td>{articles.author}</td>
              <td>
                <Button
                  onClick={() => {
                    history.push(`${match.url}/${articles._id}`);
                  }}
                >
                  Ver
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      );
    } else {
      return <div>Loading...</div>;
    }
  }; //.

} //.
