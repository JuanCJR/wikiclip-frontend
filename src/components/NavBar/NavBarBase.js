import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Image
} from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import { useRouteMatch } from "react-router-dom";

export default class NavBarBase extends Component {
  render() {
    return <this.Navegacion />;
  }

  Navegacion = () => {
    const match = useRouteMatch();

    return (
      <Navbar
        style={{ height: "42px" }}
        className="shadowCard"
        bg="info"
        variant="dark"
      >
        <Navbar.Brand className="mr-0">
          <Image
            alt="React Boostrap logo"
            className="d-inline-block align-center mb-2"
            style={{ width: "40%" }}
            src="/img/wWhite.png"
            rounded
          />
          iki
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="pl-0" href="/wikiBase">Dashboard</Nav.Link>
            <NavDropdown title="Menu 1" id="basic-nav-dropdown">
              <NavDropdown.Item href={`${match.url}/Submenu1`}>
                Sub menu 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sub menu 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sub menu 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sub menu 4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sub menu 5</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sub menu 6</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Menu 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sub menu 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sub menu 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {" "}
                Sub menu 3
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/wikiBase/kbbase">
              Base de Conocimientos
            </Nav.Link>
          </Nav>
          <Form inline onSubmit={this.onSubmit}>
            <FormControl
              onChange={this.onChangeSearch}
              type="text"
              placeholder="Buscar"
              className="mr-sm-2"
            />
            <Button type="submit" variant="dark">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}
