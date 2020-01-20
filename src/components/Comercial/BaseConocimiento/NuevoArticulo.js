import React, { Component, useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import KbService from "../services/KbService";
export default class NuevoArticulo extends Component {
  //Ventana de confirmacion
  confirmWindow = () => {
    const [show, setShow] = useState(false);
    let history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button
          variant="contained"
          color="default"
          className="mr-2"
          onClick={() => {
            history.goBack();
          }}
        >
          Volver
        </Button>
        <Button variant="contained" color="primary" onClick={handleShow}>
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
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={async () => {
                await this.onSubmit();
                history.goBack();
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
    const kbservice = new KbService();
    let data = new FormData();
    const attachment = await document.getElementById("txtArchivo").files[0];
    const title = document.getElementById("txtTitulo").value;
    const description = document.getElementById("txtDescripcion").value;
    const content = document.getElementById("txtContenido").value;
    const category = document.getElementById("txtCategoria").value;

    data.append("title", title);
    data.append("category", category);
    data.append("description", description);
    data.append("content", content);
    data.append("attachment", attachment);
    data.append("userName", this.props.userName);
    await kbservice.newArticle(data);

    // const article = await axios.post(
    //   "https://localhost:8081/api/articles/newarticle",
    //   data,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data"
    //     }
    //   }
    // );
  };
  render() {
    return (
      <Container fluid>
        <Row className="mt-3">
          <Col>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-1 mb-1 border-bottom">
              <h3>Nuevo Articulo</h3>
            </div>
          </Col>
        </Row>

        <Card className="mt-2">
          <Card.Body className="pt-0">
            <Row>
              <Col>
                <Form
                // method="POST"
                // action="https://localhost:8081/api/articles/newarticle"
                // encType="multipart/form-data"
                >
                  {" "}
                  {/* Form Group titulo */}
                  <Form.Group controlId="txtTitulo">
                    <TextField
                      className="w-100"
                      id="txtTitulo"
                      label="Titulo"
                    />
                  </Form.Group>
                  {/* Form Group Descripcion */}
                  <Form.Group controlId="txtDescripcion">
                    <TextField
                      className="w-100"
                      id="txtDescripcion"
                      label="Descripcion"
                    />
                  </Form.Group>
                  {/* Form Group Contenido */}
                  <Form.Group controlId="txtContenido">
                    <TextField
                      id="txtContenido"
                      fullWidth
                      label="Contenido"
                      multiline
                      rows="8"
                      variant="outlined"
                    />
                  </Form.Group>
                  {/* Form group categoria */}
                  <Form.Group controlId="txtCategoria">
                    <TextField
                      fullWidth
                      label="Categoria"
                      id="txtCategoria"
                      variant="outlined"
                      helperText="Seleccione una categoria "
                      select
                      required
                      SelectProps={{
                        native: true
                      }}
                    >
                      <option>Marketing</option>
                      <option>Partners</option>
                      <option>Presentaciones</option>
                    </TextField>
                  </Form.Group>
                  {/* Form Group Archivo */}
                  <Form.Group controlId="txtArchivo">
                    <Form.Label>Subir archivo</Form.Label>
                    <Form.Control name="txtArchivo" type="file" />
                  </Form.Group>
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
