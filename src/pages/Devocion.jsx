import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import img1 from "../assets/images/imagen-1.jpeg";

const Devocion = () => {
  return (
    <section>
      <Container className="py-4">
        <div className="section-title">
          <h4 className="titulo fs-3">La devoción a la preciosa sangre.</h4>
        </div>
        <div className="second-text">
          <Row className="">
            <Col md={6}>
              <div data-aos="zoom-in-down" data-aos-duration="3000">
                <p className="fs-4">
                  EN 1995, exactamente a las 3:00 p.m, la hora de la Divina Misericordia, Nuestro Señor Jesucristo llamó, por primera vez, a{" "}
                  <strong>Bernabé Nwoye</strong>, un joven del poblado de Olo, Estado de Enugu, en Nigeria, y le pidió que lo consolara y
                  adorara su Preciosísima Sangre. En una visión, dos años más tarde, el Señor le dio la Coronilla de la Preciosa Sangre y
                  todas las oraciones que la conforman. Los mensajes, oraciones, himnos y coros, así como las instrucciones, dadas
                  directamente por Nuestro Señor, Su Madre Mía, los Ángeles y Santos, desde el año 1997 hasta el presente, constituyen la
                  Devoción a la Preciosa Sangre. En esta publicación, solo presentamos las oraciones dadas a Bernabé, mientras reservamos
                  los mensajes hasta que se otorgue la aprobación Eclesial.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div data-aos="zoom-in-down" data-aos-duration="3000">
                <figure className="figure">
                  <img src={img1} alt="bernabe nwoye" className="figure-img img-fluid shadow-lg p-2 mb-5 bg-body rounded" />
                </figure>
              </div>
            </Col>
          </Row>
        </div>
        <div className="">
          <h5 className="underline py-5 fs-3 fst-italic">La devoción está compuesta por lo siguiente</h5>
          <ol className="fs-5">
            <li className="">
              <strong>Coronilla.</strong>
              <p>
                La Coronilla de la Preciosa Sangre, para ser rezada inmediatamente después del Rosario a la Santísima Virgen María, consiste
                de 5 Misterios relacionados con las Cinco Llagas Sagradas de Cristo
              </p>
            </li>
            <li>
              <strong>Consuelo.</strong>
              <p>
                Oraciones de Consuelo dirigidas al Padre Eterno y a su Hijo Unigénito, constituyen el segundo segmento de esta Devoción.
                Estas oraciones buscan consolar al Padre y al Hijo por la ingratitud del mundo, las blasfemias y negligencias contra la
                Preciosa Sangre
              </p>
            </li>
            <li>
              <strong>Adoración.</strong>
              <p>
                En la tercera parte de la Devoción, se encuentran siete oraciones que adoran, glorifican y hacen peticiones a la Preciosa
                Sangre. Las peticiones son por toda la Iglesia, su jerarquía, el clero y los fieles. Las súplicas invocando la Preciosa
                Sangre son ofrecidas también por los pecadores empedernidos, las almas del Purgatorio, por los no-católicos, por las almas
                devotas y por los niños abortados, para que todos ellos puedan alcanzar los beneficios de la Preciosa Sangre.
              </p>
            </li>
            <li>
              <strong>Reparación.</strong>
              <p>
                El cuarto segmento de la Devoción trata de la reparación. En las Siete Súplicas Angustiosas, nuestro Señor describe los
                diferentes pecados cometidos en la Iglesia y el mundo en general, que lo continúan crucificando místicamente. Estos pecados
                incluyen la negligencia por parte del Clero y de los fieles del Santo Sacrificio de la Misa y los Sacramentos, la falta de
                pudor que está haciendo que muchos vayan en tropel al Infierno, el materialismo en la Iglesia y en el mundo, el ocultismo,
                la codicia, la avaricia y muchos otros.
              </p>
            </li>
            <li>
              <strong>Intercesión.</strong>
              <p>
                Además de las cuatro partes principales, hay oraciones claves de intercesión que nuestro Señor ha revelado como las
                oraciones que Él dijo durante Su Pasión y antes de exhalar Su último suspiro por nuestra salvación. Incluyen oraciones para
                vencer a todos los enemigos de la Santa Cruz (el Anticristo y sus seguidores), por el aumento de la fe, la paciencia, por la
                liberación de maldiciones ancestrales y otras intenciones.
              </p>
            </li>
            <li>
              <strong>El Sello.</strong>
              <p>
                En esta Devoción se descubre el Gran Sello de Dios, (el Tabernáculo vivo en nuestros corazones) que los Ángeles colocaron en
                nuestras almas durante la hora del Sello. Sin este Sello, llevaríamos el propio sello del enemigo, el 666. El Gran Sello es
                renovado luchando continuamente por permanecer en estado de Gracia Santificante. De forma más sencilla, este Sello es una
                renovación más consciente del sello obtenido por cada cristiano en el Bautismo. La idea aquí, es asegurarlo con mayor
                auxilio divino en contra de la corrupción del pecado.
              </p>
            </li>
            <li>
              <strong>La Hora de Getsemaní</strong>
              <p>
                Finalmente, a través de esta Devoción, nuestro Señor está llamando a Sus elegidos a una vigilia todos los jueves por la
                noche hasta el viernes por la mañana (3:00 a.m.) que Él ha llamado, la Hora de Oración de Getsemaní. Durante este tiempo,
                los componentes de esta Devoción deben rezarse en conmemoración de la Agonía del Señor en el Huerto.
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default Devocion;
