import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { useHistory, useRouteMatch } from "react-router-dom";
export default class SideBar extends Component {
  //History Button
  historyButton = props => {
    const history = useHistory();
    const match = useRouteMatch();
    return (
      <Button
        style={{
          border: "0px",
          fontSize: "inherit",
          paddingLeft: "4px",
          paddingRight: "4px"
        }}
        variant="outline-light"
        onClick={() => {
          history.push(`${match.url}${props.route}`);
        }}
      >
        {props.option}
      </Button>
    );
  };

  render() {
    return (
      <nav
        className="col-md-2 d-none d-md-block bg-light sidebar pl-0 pr-0"
        style={{ position: "fixed", width: "180px" }}
      >
        <div className="sidebar-sticky">
          {/* <Image
              className=" p-1 m-0 ml-2 mb-1 d-inline-block align-top"
              src="/img/alerti.png"
              rounded
              fluid
              style={{
                width: "100px",
                backgroundColor: "white"
              }}
            ></Image> */}
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-2 mt-1 mb-1 text-muted">
            <span style={{ fontSize: "12px", color: "#d2dae2" }}>Opciones</span>
          </h6>
          <ul className="nav flex-column mt-2">
            <li className="nav-item">
              <img
                className="pr-2 ml-2"
                alt="dashboard-icon"
                src="/img/home.png"
                style={{ width: "20%" }}
              ></img>
              <this.historyButton option="Dashboard" route="" />
            </li>
            <li className="nav-item">
              <img
                className="pr-2 ml-2"
                alt="dashboard-icon"
                src="/img/books.png"
                style={{ width: "20%" }}
              ></img>
              <this.historyButton
                option="Base de conocimiento"
                route="/kbcomercial"
              />
            </li>
          </ul>
          {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span style={{ fontSize: "12px", color: "#d2dae2" }}>Negocios</span>
          </h6>
          <ul className="nav flex-column">
            <li className="ml-2" style={{ marginTop: "90px" }}></li>
          </ul> */}
        </div>
        {/* Footer */}
        <div className="footer">
          <img
            width="120"
            className=""
            alt="logo-clip"
            src="/img/clip-logobandera.png"
          ></img>
          <br></br>
          <p style={{ fontSize: "8px" }}>© Copyright 2019 Clip Tecnología</p>
        </div>
      </nav>
    );
  }
}
