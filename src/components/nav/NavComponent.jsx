import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavComponent.scss";
import { AuthContext } from "../../contexts/auth-context";

const NavComponent = () => {
  const { currentUser, signOut } = useContext(AuthContext)

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src="./images/logo.jpg" width="122" height="67" className="d-inline-block align-top" />
            <span className="d-none d-md-none d-xl-inline-block fs-5">
              Apostolado de la Preciosísima Sangre <br /> de Jesucristo
            </span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
              <Link to="/nosotros" className="nav-link">
                Nosotros
              </Link>
              <Link to="/devocion" className="nav-link">
                Devoción
              </Link>
              <Link to="/oraciones" className="nav-link">
                Oraciones
              </Link>
              <Link to="/consagracion" className="nav-link">
                Consagración
              </Link>
              <Link to="/llamados" className="nav-link">
                Llamados
              </Link>
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
              <Link to="/noticias" className="nav-link">
                Noticias
              </Link>
              {
                !currentUser && (<Link to="/login" className="nav-link">
                  Login
                </Link>)
              }
              {currentUser && (
                <Link to="/dashboard" className="nav-link">
                  Admin
                </Link>
              )}

            </Nav>
            {currentUser && (
              <button className="btn btn-danger mx-2" onClick={signOut}>
                Salir
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavComponent;
