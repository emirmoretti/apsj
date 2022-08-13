import React from "react";
import "./Hero.scss";
import Jesuscrito from "../../assets/images/jesuscristo.jpg";
import { Row, Col, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="section-hero">
      <Container>
        <Row className="row-container align-items-center">
          <Col md={6} className="intro-text">
            <div data-aos="zoom-in" data-aos-duration="3000">
              <h1 id="section-hero__title">
                Apostolado de la preciosisima sangre <br />
                de
                <span className="color"> Jesucristo</span>
              </h1>
              <p>Consolar es Adorar.</p>
            </div>
            <div className="clearfix"></div>
          </Col>
          <Col md={6} className="img-col">
            <div className="img-container" data-aos="zoom-in" data-aos-duration="3000">
              <img src={Jesuscrito} alt="jesuscristo" className="img-fluid rounded" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
