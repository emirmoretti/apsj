import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/images/consagrarse.jpg";
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
            <p>
              Cada jueves de 11:00 pm a 03:00 am del viernes en la madrugada es la Hora de Getsemaní. Las siguientes oraciones deben ser
              dichas durante este tiempo:
            </p>
            <ul>
              <li>El Rosario de la Santísima Virgen María.</li>
              <li>La Santa Coronilla de la Preciosa Sangre con Letanías.</li>
              <li>Oración de Consagración a la Preciosa Sangre.</li>
              <li>Las Oraciones de Consuelo y Adoración.</li>
              <li>Las Oraciones de Reparación a Jesucristo Agonizante (Las siete Súplicas de Angustia).</li>
              <li>Las Oraciones Místicas de Nuestro Señor Jesucristo.</li>
              <li>Coronilla de Renovación y Letanía de los Santos.</li>
              <li>Misa Votiva de la Preciosa Sangre y exposición del Santísimo Sacramento (donde sea posible).</li>
            </ul>
          </div>
          <h3>Llamado a la santidad</h3>
          <p>
            La Devoción a la Preciosa Sangre, es un llamado diario a la santidad. Al menos la Coronilla (después del Rosario de nuestra
            Santa Madre), la Letanía de la Sangre Preciosa y la Consagración deben ser rezadas diariamente por un devoto. Esta Devoción es
            el arma fundamental contra Satanás y los espíritus malignos.{" "}
          </p>
          <h3>Consagrarse</h3>
          <h4>Requisitos para Consagrarse a la sangre preciosa de Jesucristo</h4>
          <div className="">
            <Row>
              <Col md={6}>
                <ol>
                  <li>Ser bautizado en la fe católica y poder recibir los Sacramentos.</li>
                  <li>
                    Haber realizado al menos 6 meses consecutivos la oración de Getsemaní, cada jueves a viernes de 12 am - 3 am, por lo
                    menos por 1 hora.
                  </li>
                  <li>Hacer una buena confesión antes de la Consagración.</li>
                  <li>Hacer una novena de 9 días antes de la consagración.</li>
                  <li>Hacer un retiro, idealmente de preparación para la consagración.</li>
                  <li>Consagración</li>
                </ol>
              </Col>
              <Col md={6}>
                <div>
                  <img src={img} alt="" />
                </div>
              </Col>
              <Col>
                <p>Después de la consagración, el consagrado debe cumplir con los llamados de oración y de obras de la devoción</p>
              </Col>
            </Row>
          </div>
          <Audio audioUrl="https://drive.google.com/file/d/1vUEwKpfOVBE2P6H0TT_ovUNdRnpJ--yN/preview"></Audio>
        </div>
      </Container>
    </section>
  );
};

export default Oraciones;
