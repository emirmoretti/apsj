import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <section id="contact-section">
      <Container>
        <div className="section-title center">
          <h2>Contactanos</h2>
          <hr />
        </div>
        <Row>
          <Col md={4}>
            <h4>Información de contacto.</h4>
            <ul>
              <li>
                <strong>Telegram </strong>
                <a href="https://web.telegram.org/z/#-308828770" target="_blank" rel="noopener noreferrer">
                  Formación del APSJ
                </a>
              </li>
              <li>
                <strong>Whatsapp </strong>
                <a href="https://wa.me/5492645187822" target="_blank" rel="noopener noreferrer">
                  Servidor Nacional
                </a>
              </li>
              <li>
                <strong>Apostolado de la Preciosísima Sangre de Nuestro Señor Jesucristo </strong>
                <a href="https://chat.whatsapp.com/FKf9lVhczp5JEeBbygz8ac" target="_blank" rel="noopener noreferrer">
                  Link Whatsapp
                </a>
              </li>
              <li>
                <strong>Email </strong>
                <a href="mailto:APS.de.argentina.oficial@gmail.com" target="_blank" rel="noopener noreferrer">
                  APS.de.argentina.oficial@gmail.com
                </a>
              </li>
            </ul>
          </Col>
          <Col md={8}>
            <h4>Contacto</h4>
            <form>
              <Row>
                <Col className="mb-4" md={6}>
                  <div className="form-group">
                    <input placeholder="Nombre" className="form-control"></input>
                  </div>
                </Col>
                <Col className="" md={6}>
                  <div className="form-group">
                    <input className="form-control" placeholder="Apellido"></input>
                  </div>
                </Col>
                <Col className="mb-3" md={6}>
                  <div className="form-group">
                    <input placeholder="Teléfono" className="form-control"></input>
                  </div>
                </Col>
                <Col className="" md={6}>
                  <div className="form-group">
                    <input className="form-control" placeholder="Email"></input>
                  </div>
                </Col>
                <Col className="" md={12}>
                  <div className="form-group">
                    <input className="form-control" placeholder="Provincia"></input>
                  </div>
                </Col>
                <Col className="mt-3" md={12}>
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Mensaje aquí" rows={4}></textarea>
                  </div>
                </Col>
              </Row>
              <button type="submit" className="btn btn-primary mt-5">
                Enviar Mensaje
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
