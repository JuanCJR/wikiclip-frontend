import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import {FormGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserService from "../services/UserService";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";

const userService = new UserService();
export default class Signin extends Component {
  state = {
    userName: "",
    password: "",
    access: ""
  };

  onChangeName = e => {
    this.setState({
      userName: e.target.value
    });
  }; //.

  onChangePasswd = e => {
    this.setState({
      password: e.target.value
    });
  }; //.

  onChangeArea = e => {
    this.setState({
      access: e.target.value
    });
  };
  authButton = () => {
    let history = useHistory();

    return (
      <Button
        variant="info"
        style={{width:"100%"}}
        onClick={async () => {
          let userData = await userService.Signin(
            this.state.userName,
            this.state.password
          );
          this.props.rescueData(userData.user.userName, userData.token,true);
          history.push("/wiki" + this.state.access);
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
      access: document.getElementById("txtArea").value
    });
  }

  render() {
    return (
      <Container className="p-0">
        <Row>
          <Col>
         
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-5">
          <Col className="text-center" xs={12} md={3}>
            {/* <Card
              className="text-center mb-3 shadowCard"
              style={{
                borderTopRightRadius: "0.375rem",
                borderBottomRightRadius: "0.375rem",
                boxSizing: "boder-box",
                marginRight: "0.5rem",
                marginLeft: "0.5rem"
              }}
            > */}
            <Avatar style={{ marginLeft: "42%", backgroundColor:"#138496" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className="mt-2" component="h1" variant="h5">
              Inicio de Sesión
            </Typography>

            <Form  onSubmit={this.onSubmit} className="m-0">
              <Form.Group controlid="Name">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="Usuario"
                  name="userName"
                  autoComplete="text"
                  autoFocus
                  required
                  onChange={this.onChangeName}
                  required
                ></TextField>
              </Form.Group>

              <Form.Group onChange={this.onChangePasswd} controlid="Passwd">
                <TextField
                  className="mt-0"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                ></TextField>
              </Form.Group>

              <FormGroup controlid="Area" onChange={this.onChangeArea}>
                <TextField
                  fullWidth
                  label="Area"
                  id="txtArea"
                  variant="outlined"
                  helperText="Seleccione su area"
                  select
                  required
                  SelectProps={{
                    native: true
                  }}
                >
                  <option>Comercial</option>
                </TextField>
              </FormGroup>
              <this.authButton />
            </Form>
            {/* <Card.Footer>
                <small className="text-muted">Wiki Clip v.0.1.0</small>
              </Card.Footer> */}
            {/* </Card> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
