import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer fdb-block footer-small bg-dark p-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-8">
            <ul className="nav justify-content-center justify-content-md-start">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/devocion" className="nav-link">
                  Devoción
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/oraciones" className="nav-link">
                  Oraciones
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/consagracion" className="nav-link">
                  Consagración
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/llamados" className="nav-link">
                  Llamados
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right text-white">© 2022 APSJ. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
