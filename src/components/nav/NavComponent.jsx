import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavComponent.scss";

const NavComponent = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo.jfif" width="122" height="67" className="d-inline-block align-top" />
            <span className="d-none d-md-inline-block">
              Apostolado de la Preciosísima Sangre <br /> de Jesuscristo
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">Inicio</Link>
              <Link to="/" className="nav-link">Nosotros</Link>
              <Link to="/" className="nav-link">Oraciones</Link>
              <Link to="/" className="nav-link">Información</Link>
              <Link to="/contact" className="nav-link">Contacto</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavComponent;
