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
            <div className="space"></div>
            <p>Direccion</p>
            <div className="space"></div>
            <p>email</p>
            <div className="space"></div>
            <p>telefono</p>
          </Col>
          <Col md={8}>
            <h4>Dejanos un mensaje</h4>
            <form>
              <Row>
                <Col className="" md={6}>
                  <div className="form-group">
                    <input placeholder="nombre" className="form-control"></input>
                  </div>
                </Col>
                <Col className="" md={6}>
                  <div className="form-group">
                    <input className="form-control" placeholder="email"></input>
                  </div>
                </Col>
                <Col className="mt-4" md={12}>
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
