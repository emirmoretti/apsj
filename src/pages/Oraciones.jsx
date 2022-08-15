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
            <p className="fs-5 fst-italic">
              Cada jueves de 11:00 pm a 03:00 am del viernes en la madrugada es la Hora de Getsemaní. Las siguientes oraciones deben ser
              dichas durante este tiempo:
            </p>
            <ul className="fs-5">
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
          <div className="pb-4">
            <h3 className="titulo">Llamado a la santidad</h3>
            <Container className="pt-3">
              <p className="fs-5">
                La Devoción a la Preciosa Sangre, es un llamado diario a la santidad. Al menos la Coronilla (después del Rosario de nuestra
                Santa Madre), la Letanía de la Sangre Preciosa y la Consagración deben ser rezadas diariamente por un devoto. Esta Devoción
                es el arma fundamental contra Satanás y los espíritus malignos.{" "}
              </p>
            </Container>
          </div>
          <div className="segundo-parrafo">
            <h3 className="titulo">Consagrarse</h3>
            <h4 className="underline fst-italic my-4">Requisitos para Consagrarse a la sangre preciosa de Jesucristo</h4>
            <Row className="align-items-center py-4">
              <Col>
                <ol className="fs-5">
                  <li>Ser bautizado en la fe católica y poder recibir los Sacramentos.</li>
                  <li>
                    Haber realizado al menos 6 meses consecutivos la oración de Getsemaní, cada jueves a viernes de 12 am - 3 am, por lo
                    menos por 1 hora.
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
          </div>
          <div className="llamados-oraciones">
            <h3 className="titulo">Llamados de oracion</h3>
            <Row>
              <Col md={6}>
                <div className="llamados-oraciones__container p-3">
                  <h4 className="sub-titulo fs-3 fw-bold">Getsemaní</h4>
                  <p className="fs-5">
                    Este llamado nos pide acompañar a Jesús en la Hora de oración de Getsemaní, por lo menos 1 hora entre 12 am y 3 am, cada
                    jueves a viernes. (Oraciones contenidas en el libro de Oraciones o Devocionario)
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="llamados-oraciones__container p-3">
                  <h4 className="sub-titulo fs-3 fw-bold">Tercer Viernes de Reparación</h4>
                  <p className="fs-5">
                    La reparación del tercer viernes es una parte crucial de esta devoción. Se realiza de acuerdo al programa de reparación,
                    preferentemente frente al Santísimo Sacramento, cada tercer viernes de mes. El llamado del Cenáculo es para todos los
                    hombres y mujeres que aman a Dios.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="llamados-oraciones__container p-3">
                  <h4 className="sub-titulo fs-3 fw-bold">Las 3 Novenas del Gran Mes de Julio</h4>
                  <p className="fs-5">
                    Mes dedicado a la Preciosísima Sangre de Nuestro Señor Jesucristo. En este mes se realizan tres grandes novenas: del 1-9
                    en Honor a los 9 Coros de Ángeles; del 13-15 en Honor a la Santísima Trinidad y del 20-31 por el Nuevo Israel (la
                    Iglesia)
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="llamados-oraciones__container p-3">
                  <h4 className="sub-titulo fs-3 fw-bold">La Hora del Sello</h4>
                  <p className="fs-5">
                    La Santísima Trinidad, desciende personalmente al alma con el Bautismo, posee al alma con la Confirmación, y renueva el
                    Gran Sello con la Reconciliación. Cada viernes de 12 pm a 3pm los consagrados deben meditar sobre la pasión y muerte del
                    Señor.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="llamados-oraciones__container p-3">
                  <h4 className="sub-titulo fs-3 fw-bold">Reparación Nacional de Septiembre</h4>
                  <p className="fs-5">
                    La Reparación del mes de septiembre es un momento en el que la Adoración Se realiza del 13 al 16 de septiembre cada año.
                    Es un encuentro de pecadores, suplicando misericordia y la gracia para ser mejores.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="llamados-oraciones__container p-3">
                  <h4 className="sub-titulo fs-3 fw-bold">Reavivamiento de Pentecostés</h4>
                  <p className="fs-5">El llamado consiste en una VIGILIA DE “TRES DIAS DE ESPERA” ANTES DEL DOMINGO DE PENTECOSTÉS.</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="llamados-obras">
            <h3 className="titulo">Llamados de obras</h3>
            <Row>
              <Col md={6}>
                <div className="p-3">
                  <h4 className="fs-3 fw-bold underline text-center pb-4">Pureza</h4>
                  <p className="fs-5">
                    Solo las almas puras entran al Cielo. Este llamado es urgente, en vista de la avalancha de impureza, que los agentes del
                    Anticristo han desencadenado en el mundo y en la Iglesia. En muchos mensajes el Cielo habla de la importancia de la
                    pureza en nosotros.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3">
                  <h4 className="fs-3 fw-bold underline text-center pb-4">Cruz de Perfección</h4>
                  <p className="fs-5">
                    La Verdad, el Perdón, la Humildad y el Amor son retos espirituales muy complejos que se presentan perpetuamente durante
                    la vida de un Cristiano, algunas veces en momentos excesivamente complicados dentro de nuestro viaje espiritual. Jesús
                    le enseña a Bernabé cómo llevar a la perfección esta carga crucial hacia la puerta de salvación.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3">
                  <h4 className="fs-3 fw-bold underline text-center pb-4">Jesús en la Santa Eucaristía</h4>
                  <p className="fs-5">
                    Los católicos están llamados a rendir culto y a adorar la Santa Eucaristía, pero algunos católicos son negligentes y
                    están despreocupados hacia el centro y la cima de la adoración cristiana: numerosos llamados de Jesús en Sus mensajes de
                    la Preciosa Sangre están orientados hacia los católicos a fin de ayudarlos a volver al verdadero culto y adoración de
                    este Sacramento.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-3">
                  <h4 className="fs-3 fw-bold underline text-center pb-4">Ayudar al Hambriento / Necesitado</h4>
                  <p className="fs-5">
                    Aunado a los anteriores llamados, hay uno más reciente de nuestro Señor para este apostolado (y para la Iglesia en
                    general) en hacer más por el pobre necesitado.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <div className="lista_audios-container py-5">
        <div className="section-title">
          <h3 className="titulo">Lista de audios</h3>
        </div>
        <Container>
          <Row>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="fs-3 lh-lg">Coronilla de la Preciosa Sangre de Jesucristo</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1AvSrKHBnNCft3-tC2DjgPNtW22M-dwm_/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="fs-3">Coronilla de Renovación</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1ie3r8PqFo03XDZ5OciIPAx19SFbppyXF/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className=" lh-lg fs-3">Las 12 promesas de Nuestro Señor Jesucristo</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1ZQ-A5F81wXLjVUzKH5kBMZ7VhXPWQ-Qv/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="lh-lg fs-3">Oración de Expiación con la Corona de Espinas</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1br6_amyt3wQaCrCqQbqOB2GOCwePo6ex/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="lh-lg fs-3">Oración para el nuevo Israel</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1KxSvhWmPxXn-sFQg8bFURF_4qWOJw_IP/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className=" lh-lg fs-3">Oración por el Triunfo en la Cruz</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/14Q8aKo2nVOZ_Y3BvqZaXAWnf2drqlcO4/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="lh-lg fs-3">Oraciones de Consuelo a Jesucristo Agonizante</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/14THycx2f8YtJ8pzFGI3zAl3ajLIlFiys/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="lh-lg fs-3">Oraciones de Reparación a Jesucristo Agonizante</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1wNnmOWuGum_MFUl3oiRWZ__AY0zQcynr/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="lh-lg fs-3">Oraciones místicas de Nuestro Señor Jesucristo</h4>
                <div className="p-3">
                  <Audio audioUrl="https://drive.google.com/file/d/1JiOm4exmgK86ZNahPLVVRbX2WXn6-TPX/preview" />
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="oracion-audio-container">
                <h4 className="lh-lg fs-3">Santo Rosario</h4>
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
