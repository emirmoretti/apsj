import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const service = "service_pi7364d";
  const template = "template_rfeboji";
  const key = "eY-3YmGIl4Z7sH-yN";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, key).then(
      (result) => {
        alert("Mensaje enviado con éxito!");
        form.current.reset();
      },
      (error) => {
        alert("Error al enviar mensaje.");
      }
    );
  };

  return (
    <section id="contact-section">
      <div data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-sine">
        <Container>
          <div className="section-title">
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
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col className="mb-4" md={6}>
                    <div className="form-group">
                      <input name="nombre" type="text" placeholder="Nombre" className="form-control" required></input>
                    </div>
                  </Col>
                  <Col className="" md={6}>
                    <div className="form-group">
                      <input name="apellido" type="text" className="form-control" placeholder="Apellido" required></input>
                    </div>
                  </Col>
                  <Col className="mb-3" md={6}>
                    <div className="form-group">
                      <input name="telefono" type="number" inputMode="numeric" placeholder="Teléfono" className="form-control" required></input>
                    </div>
                  </Col>
                  <Col className="" md={6}>
                    <div className="form-group">
                      <input name="email" type="email" className="form-control" placeholder="Email" required></input>
                    </div>
                  </Col>
                  <Col className="" md={12}>
                    <div className="form-group">
                      <input name="provincia" type="text" className="form-control" placeholder="Provincia" required></input>
                    </div>
                  </Col>
                  <Col className="mt-3" md={12}>
                    <div className="form-group">
                      <textarea name="mensaje" type="text" className="form-control" placeholder="Mensaje aquí" rows={4} required></textarea>
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
      </div>
    </section>
  );
};

export default ContactForm;
