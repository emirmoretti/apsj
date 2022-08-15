import React from "react";
import ContactForm from "../components/contact/ContactForm";
import { Col, Container, Row } from "react-bootstrap";
import Table from "../components/table/Table";
import "./styles/Contacto.scss";

const Contact = () => {
  return (
    <section id="section-contacto">
      <Container className="mb-5">
        <h3 className="underline py-5">Información Importante</h3>
        <h4 className="fs-4 fst-italic pb-4">
          <a href="https://worldapostolateofpreciousblood.com/" target="_blank" rel="noopener noreferrer">
            APOSTOLADO MUNDIAL DE LA PRECIOSISIMA SANGRE DE NUESTRO SEÑOR JESUCRISTO
          </a>
        </h4>
        <div>
          <h4 className="underline fs-4 pb-4 lh-lg">INFORMACIÓN PARA REALIZAR GETSEMANI</h4>
          <p className="fs-5">
            Todos los <strong>Jueves de 11:00 pm a 03:00 am del viernes</strong>, se realiza para los devotos que no puedan asistir en forma
            presencial un cenáculo virtual a través de Google meet y Facebook, el enlace es publicado en el grupo de WhatsApp de la
            Preciosísima Sangre de Nuestro Señor Jesucristo.
          </p>
        </div>
        <div className="py-5">
          <h4 className="underline lh-lg">Para más información sobre esta Devoción y sus cenáculos de Oración cerca de tu localidad contactar</h4>
          <p className="fs-5 pt-4">Servidor Nacional <span className="fw-bold">Jose Luis Ejarque</span>, Teléfono/WhatsApp: +54 264 5187822.</p>
        </div>
        <Table />
      </Container>
      <ContactForm />
    </section>
  );
};

export default Contact;
