import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavComponent.scss";

const NavComponent = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo.png" width="122" height="67" className="d-inline-block align-top" />
            <span className="d-none d-md-inline-block">
              Apostolado de la Preciosisima Sangre <br /> de Jesuscristo
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="">Nosotros</Nav.Link>
              <Nav.Link href="">Información</Nav.Link>
              <Nav.Link href="">Descargas</Nav.Link>
              <Nav.Link href="">Contacto</Nav.Link>
              {/* 
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>*/}
              <Nav.Link href="" className="btn btn-danger text-white">
                Donar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavComponent;
