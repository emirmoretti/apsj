import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import getsemani from '../assets/images/gethsemane.jpg'
import Audio from "../components/audio/Audio";
import "./styles/Oraciones.scss";

const Oraciones = () => {
  return (
    <section id="section-oraciones">
      <Container>
        <div className="section-title">
          <h2>LAS ORACIONES DE GETSEMANÍ</h2>
          <span>(Contenidas en el libro de Oraciones o Devocionario)</span>
        </div>
        <div className="oraciones-conteiner">
          <div className="primer-parrafo">
            <Row>
              <Col md={8}>
                <p data-aos="zoom-in" data-aos-duration="3000" className="fs-5 fst-italic">
                  Cada jueves de 11:00 pm a 03:00 am del viernes en la madrugada es la Hora de Getsemaní. Las siguientes oraciones deben ser
                  dichas durante este tiempo:
                </p>
                <ul className="fs-5" data-aos="fade-right" data-aos-duration="3000">
                  <li>El Rosario de la Santísima Virgen María.</li>
                  <li>La Santa Coronilla de la Preciosa Sangre con Letanías.</li>
                  <li>Oración de Consagración a la Preciosa Sangre.</li>
                  <li>Las Oraciones de Consuelo y Adoración.</li>
                  <li>Las Oraciones de Reparación a Jesucristo Agonizante (Las siete Súplicas de Angustia).</li>
                  <li>Las Oraciones Místicas de Nuestro Señor Jesucristo.</li>
                  <li>Coronilla de Renovación y Letanía de los Santos.</li>
                  <li>Misa Votiva de la Preciosa Sangre y exposición del Santísimo Sacramento (donde sea posible).</li>
                </ul>
              </Col>
              <Col>
                <div data-aos="fade-left" data-aos-duration="3000">
                  <img src={getsemani} alt="" className="img-fluid shadow-lg p-3 mb-5 bg-body rounded"/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <div className="lista_audios-container py-5">
        <div className="section-title">
          <h3 className="text-center fs-2 text-white fw-bold fst-italic titulo py-3">Lista de audios</h3>
        </div>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="fs-3 lh-lg">Coronilla de la Preciosa Sangre de Jesucristo.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1AvSrKHBnNCft3-tC2DjgPNtW22M-dwm_/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="fs-3">Coronilla de Renovación.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1ie3r8PqFo03XDZ5OciIPAx19SFbppyXF/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className=" lh-lg fs-3">Las 12 promesas de Nuestro Señor Jesucristo.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1ZQ-A5F81wXLjVUzKH5kBMZ7VhXPWQ-Qv/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="lh-lg fs-3">Oración de Expiación con la Corona de Espinas.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1br6_amyt3wQaCrCqQbqOB2GOCwePo6ex/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="lh-lg fs-3">Oración para el nuevo Israel.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1KxSvhWmPxXn-sFQg8bFURF_4qWOJw_IP/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className=" lh-lg fs-3">Oración por el Triunfo en la Cruz.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/14Q8aKo2nVOZ_Y3BvqZaXAWnf2drqlcO4/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="lh-lg fs-3">Oraciones de Consuelo a Jesucristo Agonizante.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/14THycx2f8YtJ8pzFGI3zAl3ajLIlFiys/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="lh-lg fs-3">Oraciones de Reparación a Jesucristo Agonizante.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1wNnmOWuGum_MFUl3oiRWZ__AY0zQcynr/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="lh-lg fs-3">Oraciones místicas de Nuestro Señor Jesucristo.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1JiOm4exmgK86ZNahPLVVRbX2WXn6-TPX/preview" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="oracion-audio-container p-4">
                <h4 className="lh-lg fs-3">Santo Rosario.</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1vUEwKpfOVBE2P6H0TT_ovUNdRnpJ--yN/preview" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Oraciones;
