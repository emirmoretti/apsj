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
            <h3>Llamado a la santidad</h3>
            <p>
              La Devoción a la Preciosa Sangre, es un llamado diario a la santidad. Al menos la Coronilla (después del Rosario de nuestra
              Santa Madre), la Letanía de la Sangre Preciosa y la Consagración deben ser rezadas diariamente por un devoto. Esta Devoción es
              el arma fundamental contra Satanás y los espíritus malignos.{" "}
            </p>
          </div>
          <div className="segundo-parrafo">
            <h3>Consagrarse</h3>
            <h4>Requisitos para Consagrarse a la sangre preciosa de Jesucristo</h4>
            <Row>
              <Col>
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
              <Col>
                <div>
                  <img className="img-fluid" src={img} alt="" />
                </div>
              </Col>
            </Row>
            <p>Después de la consagración, el consagrado debe cumplir con los llamados de oración y de obras de la devoción</p>
          </div>
          <div className="llamados-oraciones">
            <h3>Llamados de oracion</h3>
            <Row>
              <Col md={4}>
                <h4>1 - Getsemaní</h4>
                <p>
                  Este llamado nos pide acompañar a Jesús en la Hora de oración de Getsemaní, por lo menos 1 hora entre 12 am y 3 am, cada
                  jueves a viernes. (Oraciones contenidas en el libro de Oraciones o Devocionario)
                </p>
                <div className="p-2">
                  <Audio audioUrl="https://drive.google.com/file/d/1vUEwKpfOVBE2P6H0TT_ovUNdRnpJ--yN/preview"></Audio>
                </div>
              </Col>
              <Col md={4}>
                <h4>2 - Tercer Viernes de Reparación</h4>
                <p>
                  La reparación del tercer viernes es una parte crucial de esta devoción. Se realiza de acuerdo al programa de reparación,
                  preferentemente frente al Santísimo Sacramento, cada tercer viernes de mes. El llamado del Cenáculo es para todos los
                  hombres y mujeres que aman a Dios.
                </p>
              </Col>
              <Col md={4}>
                <h4>3 - Las 3 Novenas del Gran Mes de Julio</h4>
                <p>
                  Mes dedicado a la Preciosísima Sangre de Nuestro Señor Jesucristo. En este mes se realizan tres grandes novenas: del 1-9
                  en Honor a los 9 Coros de Ángeles; del 13-15 en Honor a la Santísima Trinidad y del 20-31 por el Nuevo Israel (la Iglesia)
                </p>
              </Col>
              <Col md={4}>
                <h4>4 - La Hora del Sello</h4>
                <p>
                  La Santísima Trinidad, desciende personalmente al alma con el Bautismo, posee al alma con la Confirmación, y renueva el
                  Gran Sello con la Reconciliación. Cada viernes de 12 pm a 3pm los consagrados deben meditar sobre la pasión y muerte del
                  Señor.
                </p>
              </Col>
              <Col md={4}>
                <h4>5 - Reparación Nacional de Septiembre</h4>
                <p>
                  La Reparación del mes de septiembre es un momento en el que la Adoración Se realiza del 13 al 16 de septiembre cada año.
                  Es un encuentro de pecadores, suplicando misericordia y la gracia para ser mejores.
                </p>
              </Col>
              <Col md={4}>
                <h4>6 - Reavivamiento de Pentecostés</h4>
                <p>El llamado consiste en una VIGILIA DE “TRES DIAS DE ESPERA” ANTES DEL DOMINGO DE PENTECOSTÉS.</p>
              </Col>
            </Row>
          </div>
          <div className="llamados-obras">
            <h3>Llamados de obras</h3>
            <ul>
              <li>
                <p>
                  <strong>Pureza: </strong> Solo las almas puras entran al Cielo. Este llamado es urgente, en vista de la avalancha de
                  impureza, que los agentes del Anticristo han desencadenado en el mundo y en la Iglesia. En muchos mensajes el Cielo habla
                  de la importancia de la pureza en nosotros.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Oraciones;
