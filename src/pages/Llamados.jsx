import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Llamados = () => {
  return (
    <section className="pt-5">
      <Container className="py-4">
        <div className="pb-4">
          <h3 className="titulo">Llamado a la santidad</h3>
          <Container className="pt-3">
            <p className="fs-5">
              La Devoción a la Preciosa Sangre, es un llamado diario a la santidad. Al menos la Coronilla (después del Rosario de nuestra
              Santa Madre), la Letanía de la Sangre Preciosa y la Consagración deben ser rezadas diariamente por un devoto. Esta Devoción es
              el arma fundamental contra Satanás y los espíritus malignos.{" "}
            </p>
          </Container>
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
                  en Honor a los 9 Coros de Ángeles; del 13-15 en Honor a la Santísima Trinidad y del 20-31 por el Nuevo Israel (la Iglesia)
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
      </Container>
    </section>
  );
};

export default Llamados;
