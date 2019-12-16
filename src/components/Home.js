import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default class Home extends Component {
  render() {
    return (
      <div className="main-home">
        <div className="cover black">
          <Container fluid>
            <Row>
              <Col>
                <h2 className="logo cursive">Wiki Clip</h2>
                <div className="content">
                  <h4 className="motto">
                    {" "}
                    Base de conocimiento centralizada de Clip Tecnologia
                  </h4>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col>
                <Button variant="success" href="/signin" className="mt-4" style={{marginLeft:"45%"}}>Entrar</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
