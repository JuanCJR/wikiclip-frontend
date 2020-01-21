import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import names from "../names.json";
export default class SideBar extends Component {
  render() {
    return (
      <nav
        className="col-md-2 d-none d-md-block bg-light sidebar pl-0 pr-0"
        style={{position:"fixed",width:"180px"}}
      >
        <div className="sidebar-sticky">
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-2 mt-3 mb-1 text-muted">
            <span>Opciones</span>
          </h6>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Button
                style={{ border: "0px", fontSize: "inherit" }}
                variant="outline-primary"
                onClick={() => {
                  this.props.changePage("Dashboard", "");
                }}
              >
                <img
                  className="pr-2"
                  alt="dashboard-icon"
                  src="/img/dashboard2.png"
                ></img>
                Dashboards
              </Button>
            </li>
             <li className="nav-item">
              <Button
              onClick={() => {
                  this.props.changePage("options", "");
                }}
                style={{ border: "0px", fontSize: "inherit" }}
                variant="outline-primary"
              >
                <img
                  className="pr-2"
                  alt="tools-icon"
                  src="/img/tools_25px.png"
                ></img>
                Opciones
              </Button>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Negocios</span>
          </h6>
          <ul className="nav flex-column">
            {this.props.Negocios.map(Negocios => {
              let imgUrl = names.filter(
                names => names.Negocio === Negocios.Nombre
              );
             
              return (
                <li key={Negocios._id} className="nav-item">
                  <Button
                    style={{ border: "0px", fontSize: "inherit" }}
                    variant="outline-primary"
                    onClick={() => {
                      this.props.changePage("Individual", Negocios.Nombre);
                    }}
                  >
                    <img
                      width="40"
                      alt="logo-pais"
                      className="pr-2"
                      src={imgUrl[0].imgUrl}
                    ></img>
                    {Negocios.Nombre}
                  </Button>
                </li>

                
              );
            })}
            <li className="ml-2" style={{marginTop:"90px"}}>
              <img
                width="120"
                className=""
                alt="logo-clip"
                src="/img/clip-logobandera.png"
              ></img>
              <br></br>
            <p style={{fontSize:"8px"}}>© Copyright 2019 Clip Tecnología</p>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
