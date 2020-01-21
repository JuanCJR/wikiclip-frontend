import React, { Component, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export default class NuevoArticulo extends Component {
  //Ventana de confirmacion
  confirmWindow = () => {
    const [show, setShow] = useState(false);
    let history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Enviar
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Guardar Nuevo Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Se guardara el siguiente Item en la base de conociemientos.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={async () => {
                await this.onSubmit();
                history.push("/wikiBase/kbbase");
              }}
            >
              guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  onSubmit = async e => {
    // e.preventDefault();
    let data = new FormData();
    const attachment = await document.getElementById("txtArchivo").files[0];
    const title = document.getElementById("txtTitulo").value;
    const description = document.getElementById("txtDescripcion").value;
    const content = document.getElementById("txtContenido").value;

    data.append("title", title);
    data.append("description", description);
    data.append("content", content);
    data.append("attachment", attachment);
    data.append("userName", this.props.userName);
    const article = await axios.post(
      "https://192.168.0.54:8081/api/articles/newarticle",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
  };
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
                <Form
                >
                  {" "}
                  {/* Form Group titulo */}
                  <Form.Group controlId="txtTitulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Ingrese un título"
                    />
                  </Form.Group>
                  {/* Form Group Descripcion */}
                  <Form.Group controlId="txtDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Ingrese una descripción"
                    />
                  </Form.Group>
                  {/* Form Group Contenido */}
                  <Form.Group controlId="txtContenido">
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows="7"
                      placeholder="Ingrese el contenido del articulo"
                    />
                  </Form.Group>
                  {/* Form Group Archivo */}
                  <Form.Group controlId="txtArchivo">
                    <Form.Label>Subir archivo</Form.Label>
                    <Form.Control name="txtArchivo" type="file" />
                  </Form.Group>
                  <Button
                    as="a"
                    href="/wikiBase/kbbase"
                    variant="dark"
                    style={{ color: "white" }}
                    className="mr-2"
                  >
                    Volver
                  </Button>
                  <this.confirmWindow />
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
