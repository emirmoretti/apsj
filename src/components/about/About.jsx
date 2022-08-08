import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './About.scss'

const About = () => {
  return (
    <section id="about-section">
      <Container>
        <div className="section-title">
          <h2>Sobre Nosotros</h2>
          <hr />
        </div>
        <Row>
          <Col md={4}>
            <h3>Quienes somos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem delectus impedit veritatis animi voluptatum?
              Nobis molestias ea, tempore eveniet qui, totam reiciendis est nesciunt quasi sequi ipsum temporibus quo.
            </p>
            <a>Visitar</a>
          </Col>
          <Col md={4}>
            <h3>Historia</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem delectus impedit veritatis animi voluptatum?
              Nobis molestias ea, tempore eveniet qui, totam reiciendis est nesciunt quasi sequi ipsum temporibus quo.
            </p>
            <a>Visitar</a>
          </Col>
          <Col md={4}>
            <h3>Oraciones</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem delectus impedit veritatis animi voluptatum?
              Nobis molestias ea, tempore eveniet qui, totam reiciendis est nesciunt quasi sequi ipsum temporibus quo.
            </p>
            <a>Visitar</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
