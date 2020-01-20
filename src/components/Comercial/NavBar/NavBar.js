import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useHistory, Redirect } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        className="shadowCard fixed-top flex-md-nowrap customBackground customNav"
        style={{ height: "40px", position: "relative" }}
      >
        <Navbar.Brand>
          {/* <Image
              className=" p-0 m-0 d-inline-block align-top"
              src="/img/alerti.png"
              rounded
              fluid
              style={{
                width: "100px",
                backgroundColor: "rgba(240, 255, 255, 0.555)"
              }}
            ></Image> */}
        </Navbar.Brand>
        <Navbar.Brand style={{ color: "white" }}>
         Wiki
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Navbar.Text style={{ fontSize: "0.8rem" }}>
            Usuario: {this.props.userName}
          </Navbar.Text>
        </Navbar.Collapse>
        {/* <Button
            className="ml-2"
            variant="outline-info"
            style={{
              fontSize: "11px",
              paddingTop: "2px",
              paddingBottom: "2px"
            }}
            onClick={() => {
              this.props.changeIsLoggedIn(false);
            }}
          >
            Cerrar Sesion
          </Button> */}

        <this.signOutButton />
      </Navbar>
    );
  } //

  signOutButton = () => {
    let history = useHistory();
    return (
      <Button
        className="ml-2"
        variant="outline-light"
        style={{
          fontSize: "11px",
          paddingTop: "2px",
          paddingBottom: "2px"
        }}
        onClick={() => {
          this.props.changeIsLoggedIn(false);
          history.push("/signin");
        }}
      >
        Cerrar Sesion
      </Button>
    );
  };
}
