import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-dark py-5">
      <div class="container">
        <div class="row align-items-top text-center text-md-left text-white">
          <div class="col-12 col-sm-6 col-md-4 ">
            <h3>
              <strong>Menu</strong>
            </h3>
            <nav class="nav flex-column ">
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
            </nav>
          </div>

          <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
            <h3>
              <strong>Contacto</strong>
            </h3>
            <p>APS.de.argentina.oficial@gmail.com</p>
            <p>+54 264 5187822</p>
          </div>

          <div class="col-12 col-md-4 mt-5 text-md-left">
            <div className="center">
              <img src="/images/logo.jfif" alt="logo" className="img-fluid w-50" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
