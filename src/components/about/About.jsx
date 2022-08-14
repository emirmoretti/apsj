import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <section id="about-section">
      <Container>
        <div className="section-title">
          <h2 className="underline">Sobre Nosotros</h2>
        </div>
        <Row>
          <Col md={4}>
            <h3>Quienes somos</h3>
            <p className="fs-5">
              Devoción a la Preciosísima Sangre de Nuestro Jesucristo no es una nueva devoción en la Santa Iglesia Católica. Es tan antigua
              como el primer Jueves Santo, cuando Jesús instituyó el Sacerdocio y la Santa Eucaristía. La proclamación de las siguientes
              palabras...
            </p>
            <Link to="/nosotros" className="nav-link text-primary">
              Continuar leyendo
            </Link>
          </Col>
          <Col md={4}>
            <h3>Oraciones</h3>
            <p className="fs-5">
              LAS ORACIONES DE GETSEMANÍ (Contenidas en el libro de Oraciones o Devocionario). Cada jueves de 11:00 pm a 03:00 am del
              viernes en la madrugada es la Hora de Getsemaní. Las siguientes oraciones deben ser dichas durante este tiempo...
            </p>
            <Link to="/oraciones" className="nav-link text-primary">
              Continuar leyendo
            </Link>
          </Col>
          <Col md={4}>
            <h3 className="">Contacto</h3>
            <p className="fs-5">Para más información sobre esta Devoción y sus cenáculos de Oración cerca de tu localidad contactar...</p>
            <Link to="/contacto" className="nav-link text-primary">
              Continuar leyendo
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
