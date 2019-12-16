import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
export default class NavBar extends Component {
  render() {
      return (
        <Navbar sticky="top" className="shadowCard" bg="info" variant="dark">
          <Navbar.Brand>
            {/* <Image
              className=" p-0 m-0 d-inline-block align-top"
              src="/img/alerti.png"
              rounded
              fluid
              style={{
                width: "130px",
                backgroundColor: "rgba(240, 255, 255, 0.555)"
              }}
            ></Image> */}
          </Navbar.Brand>
          <Navbar.Brand>Wiki-Clip</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Navbar.Text>Usuario: {this.props.user}</Navbar.Text>
          </Navbar.Collapse>
          <Button
            className="ml-2"
            variant="outline-info"
            style={{ fontSize: "13px" }}
            onClick={() => {
              this.props.changeIsLoggedIn(false);
            }}
          >
            Cerrar Sesión
          </Button>
        </Navbar>
      );
    
      
    
  }
}
