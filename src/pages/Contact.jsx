import React from "react";
import ContactForm from "../components/contact/ContactForm";
import { Col, Container, Row } from "react-bootstrap";
import Table from "../components/table/Table";
import "./styles/Contacto.scss";
import getsemani2 from "../assets/images/getsemani2.jpg";

const Contact = () => {
  return (
    <section id="section-contacto">
      <Container className="mb-5 py-5">
        <h3 className="py-4 titulo">Información Importante</h3>
        <p className="fs-4 fst-italic py-3">
          Link al Apostolado Mundial de la Preciosisima Sangre de Nuestro Señor Jesucristo. <br />
          <a href="https://worldapostolateofpreciousblood.com/" target="_blank" rel="noopener noreferrer" className="d-block text-center">
            APOSTOLADO MUNDIAL DE LA PRECIOSISIMA SANGRE DE NUESTRO SEÑOR JESUCRISTO
          </a>
        </p>
        <div>
          <Row className="justify-content-center">
            <Col>
              <h4 className="underline fs-4 pb-4 lh-lg text-center">INFORMACIÓN PARA REALIZAR GETSEMANI</h4>
              <p className="fs-5 p-1">
                Todos los <strong>Jueves de 11:00 pm a 03:00 am del viernes</strong>, se realiza para los devotos que no puedan asistir en
                forma presencial un cenáculo virtual a través de Google meet y Facebook, el enlace es publicado en el grupo de WhatsApp de
                la Preciosísima Sangre de Nuestro Señor Jesucristo.
              </p>
            </Col>
            <Col md={12}>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                <img src={getsemani2} alt="getsemani" className="img-fluid shadow-lg bg-body" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="py-5">
          <h4 className="underline lh-lg">
            Para más información sobre esta Devoción y sus cenáculos de Oración cerca de tu localidad contactar
          </h4>
          <p className="fs-5 pt-4">
            Servidor Nacional <span className="fw-bold">Jose Luis Ejarque</span>, Teléfono/WhatsApp: +54 264 5187822.
          </p>
        </div>
        <Table />
      </Container>
      <ContactForm />
    </section>
  );
};

export default Contact;
