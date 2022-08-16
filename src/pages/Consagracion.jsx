import React from "react";
import img from "../assets/images/consagrarse.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Consagracion = () => {
  return (
    <div>
      <div className="pt-4">
        <h3 className="titulo">Consagrarse</h3>
        <Container>
          <h4 className="underline fst-italic my-4">Requisitos para Consagrarse a la sangre preciosa de Jesucristo</h4>
          <Row className="align-items-center py-4">
            <Col>
              <ol className="fs-5">
                <li>Ser bautizado en la fe católica y poder recibir los Sacramentos.</li>
                <li>
                  Haber realizado al menos 6 meses consecutivos la oración de Getsemaní, cada jueves a viernes de 12 am - 3 am, por lo menos
                  por 1 hora.
                </li>
                <li>Hacer una buena confesión antes de la Consagración.</li>
                <li>Hacer una novena de 9 días antes de la consagración.</li>
                <li>Hacer un retiro, idealmente de preparación para la consagración.</li>
                <li>Consagración.</li>
              </ol>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center">
                <img className="img-fluid" src={img} alt="" />
              </div>
            </Col>
          </Row>
          <p className="fs-5">
            Después de la consagración, el consagrado debe cumplir con los llamados de oración y de obras de la devoción.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Consagracion;
