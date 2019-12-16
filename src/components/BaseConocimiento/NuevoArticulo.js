import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
export default class NuevoArticulo extends Component {
  render() {
    return (
      <Container fluid>
        <Card className="mt-2">
          <Card.Header>
            <h3>Nuevo articulo</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form>
                  {/* Form Group titulo */}
                  <Form.Group controlId="formTitulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Ingrese un título"
                    />
                  </Form.Group>

                  {/* Form Group Descripcion */}
                  <Form.Group controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Ingrese una descripción"
                    />
                  </Form.Group>

                  {/* Form Group Contenido */}
                  <Form.Group controlId="formContenido">
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows="7"
                      placeholder="Ingrese el contenido del articulo"
                    />
                  </Form.Group>
                  {/* Form Group Autor */}
                  <Form.Group controlId="formAutor">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      rows="7"
                      placeholder="Ingrese el contenido del articulo"
                    />
                  </Form.Group>
                  {/* Form Group Archivo */}
                  <Form.Group controlId="formArchivo">
                    <Form.Label>Subir archivo</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Button
                    as="a"
                    variant="dark"
                    style={{ color: "white" }}
                    className="mr-2"
                  >
                    Volver
                  </Button>
                  <Button variant="primary" type="submit">
                    Guardar
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
