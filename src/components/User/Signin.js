import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import { Navbar, FormGroup,Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default class Signin extends Component {
  state = {
    Name: "",
    Passwd: "",
    Area: ""
  };

  onChangeName = e => {
    this.setState({
      Name: e.target.value
    });
  }; //.

  onChangePasswd = e => {
    this.setState({
      Passwd: e.target.value
    });
  }; //.

  onChangeArea = e => {
    this.setState({
      Area: e.target.value
    });
  };
  authButton = () => {
    let history = useHistory();

    return (
      <Button
        variant="dark"
        onClick={() => {
          history.push("/wiki" + this.state.Area);
        }}
      >
        Entrar
      </Button>
    );
  };

  onSubmit = async e => {
    e.preventDefault();
  }; //.

  componentDidMount() {
    this.setState({
      Area: document.getElementById("txtArea").value
    });
  }

  render() {
    return (
      <Container fluid className="p-0">
        <Row>
          <Col>
            <Navbar
            style={{height:"42px"}}
              bg="info"
              variant="dark"
              className="customBackground shadowCard"
              expand="lg"
              //   style={{ backgroundColor: "#19a4c7" }}
            >
              <Navbar.Brand>
                <Image
                  alt="React Boostrap logo"
                  className="d-inline-block align-center mb-2"
                  style={{ width:"40%" }}
                  src="/img/wWhite.png"
                  rounded
                />
                iki
              </Navbar.Brand>
            </Navbar>
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={3}>
            <Card
              className="text-center mb-3 shadowCard"
              style={{
                borderTopRightRadius: "0.375rem",
                borderBottomRightRadius: "0.375rem",
                boxSizing: "boder-box",
                marginRight: "0.5rem",
                marginLeft: "0.5rem"
              }}
            >
              <Form onSubmit={this.onSubmit} className="m-2">
                <Form.Group controlid="Name">
                  <h3>Inicio de Sesión</h3>
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    onChange={this.onChangeName}
                    type="text"
                    placeholder="Ingresar nombre de usuario"
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group onChange={this.onChangePasswd} controlid="Passwd">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    required
                  ></Form.Control>
                </Form.Group>

                <FormGroup controlid="Area" onChange={this.onChangeArea}>
                  <Form.Label>Area</Form.Label>
                  <Form.Control id="txtArea" as="select" required>
                    <option>Base</option>
                    <option>Consultoria</option>
                    <option>Operaciones</option>
                    <option>Comercial</option>
                  </Form.Control>
                </FormGroup>
                <this.authButton />
              </Form>
              <Card.Footer>
                <small className="text-muted">Wiki Clip v.0.1.0</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
