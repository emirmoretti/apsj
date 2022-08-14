import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import nwoye from "../assets/images/nwoye.jpg";
import logo3 from "../assets/images/logo3.jpg";

import "./styles/Nosotros.scss";

const Nosotros = () => {
  return (
    <div id="section-nosotros">
      <div className="first-section-title">
        <h2>Introducción a la Preciosísima Sangre de Jesucristo</h2>
        <Container>
          <div className="video-container">
            <div className="ratio ratio-21x9">
              <iframe
                src="https://drive.google.com/file/d/1iTuTKvJUuI_hbKvi51fQCK1J4R95R0C5/preview"
                allow="autoplay"
                className="embed-responsive-item"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="info-container">
          <div className="section-title">
            <h3 className="underline">Sobre Nosotros</h3>
            <h4>DEVOCION A LA PRECIOSISIMA SANGRE DE NUESTRO SEÑOR JESUCRISTO</h4>
          </div>
          <div className="first-text">
            <Row className="p-3">
              <Col md={8}>
                <p>
                  La Devoción a la Preciosísima Sangre de Nuestro Jesucristo no es una nueva devoción en la Santa Iglesia Católica. Es tan
                  antigua como el primer Jueves Santo, cuando Jesús instituyó el Sacerdocio y la Santa Eucaristía. La proclamación de las
                  siguientes palabras en la noche antes de su Sufrimiento: “Este es mi cuerpo, que es entregado por vosotros. Haced esto en
                  memoria mía. Este cáliz es la nueva alianza en mi sangre, que es derramada por vosotros”. (Lc. 22, 19-20), evocó de los
                  Apóstoles un fervor religioso sublime o reverencia. Antes de esto, Jesús había realizado grandes milagros, pero ellos
                  vieron el milagro de milagros en la institución de la Eucaristía, el Sacrificio de la Cruz, el sacrificio de la Nueva Ley,
                  el Sacramento más admirable, la presencia maravillosa, y el permanente memorial de la Pasión de Cristo. Viendo a Cristo
                  colocándose a si mismo, ante ellos, como un sacrificio de reconciliación o de salvación, y como comida de vida eterna, -el
                  más precioso y maravilloso banquete- los hizo a ellos adorar la maravillosa presencia con una fe que va más allá de lo
                  descriptible. Desde entonces ha sido siempre así en la Santa Iglesia Católica y lo seguirá siendo hasta que el Señor
                  regrese en su gloria. Este es el mandamiento del Señor. Debemos seguir proclamando a la muerte del Señor hasta que Él
                  regrese (cfr.1 Co. 11,26).
                </p>
              </Col>
              <Col>
                <div>
                  <img src={logo3} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
            <p>
              Mientras la Iglesia continúe celebrando la Santa Eucarística en obediencia al mandato del Señor, “Hagan esto en memoria Mía”,
              ella mantiene a través del tiempo su devoción a través de la Preciosa Sangre y Cuerpo de Nuestro Señor Jesucristo. Ella ofrece
              un sacrificio vivo, un memorial perpetuo de su Pasión, el cual muestra la inmensidad del amor Cristo por nosotros. La mejor
              manera en que cada uno de nosotros pueda demostrar nueva devoción al Señor Eucarístico es recibiéndole a Él en la Sagrada
              Comunión y participando activa y reverentemente en la Santa Misa. Si sabemos verdaderamente que la Eucaristía es el Sacrificio
              de la Cruz, adoraremos con mayor atención y devoción, y resistiremos a todas las tendencias de convertir la Misa en un salón
              de baile o en una reunión de recaudación de fondos.
            </p>
            <p>
              La Misa es la representación del Ministerio Pascual. Es a la vez e inseparablemente, el memorial sacrificial en que se
              perpetúa el sacrificio de la cruz, y el banquete sagrado de la comunión en el Cuerpo y la Sangre del Señor. En la Misa nos
              hacemos uno con Jesús y con los demás. Nuestras almas son llenadas de gracias y se nos da una prenda de la gloria futura.
              Todos estos tesoros inestimables merecen de nuestra devoción. La devoción al Señor Eucarístico continúa en la Bendición, en la
              visita frecuente al Señor en el Santísimo Sacramento y en la exposición del Santísimo Sacramento. En estos también vemos la
              devoción a la Preciosa Sangra de Jesucristo, porque como una persona viva, Su Sangre no puede ser separada de Su Cuerpo.
            </p>
            <blockquote className="text-muted fs-6 fw-light">
              + Ayo - María Atoyebi. OP Obispo de la Diócesis de Llorin (Nigeria) 17 de Junio de 2007 Solemnidad del Cuerpo y la Sangre de
              Cristo.
            </blockquote>
          </div>
          <div className="section-title">
            <h4>La devoción a la preciosa sangre.</h4>
          </div>
          <div className="second-text">
            <Row className="align-items-center">
              <Col md={6}>
                <div>
                  <p>
                    EN 1995, exactamente a las 3:00 p.m, la hora de la Divina Misericordia, Nuestro Señor Jesucristo llamó, por primera vez,
                    a <strong>Bernabé Nwoye</strong>, un joven del poblado de Olo, Estado de Enugu, en Nigeria, y le pidió que lo consolara
                    y adorara su Preciosísima Sangre. En una visión, dos años más tarde, el Señor le dio la Coronilla de la Preciosa Sangre
                    y todas las oraciones que la conforman. Los mensajes, oraciones, himnos y coros, así como las instrucciones, dadas
                    directamente por Nuestro Señor, Su Madre Mía, los Ángeles y Santos, desde el año 1997 hasta el presente, constituyen la
                    Devoción a la Preciosa Sangre. En esta publicación, solo presentamos las oraciones dadas a Bernabé, mientras reservamos
                    los mensajes hasta que se otorgue la aprobación Eclesial.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="mx-auto">
                  <figure className="figure">
                    <img src={nwoye} alt="bernabe nwoye" className="figure-img img-fluid rounded" />
                    <figcaption className="figure-caption"> - Bernabé Nwoye</figcaption>
                  </figure>
                </div>
              </Col>
            </Row>
          </div>
          <div className="third-text">
            <h5 className="underline">La devoción está compuesta por lo siguiente:</h5>
            <ol>
              <li>
                <h6>Coronilla.</h6>
                <p>
                  La Coronilla de la Preciosa Sangre, para ser rezada inmediatamente después del Rosario a la Santísima Virgen María,
                  consiste de 5 Misterios relacionados con las Cinco Llagas Sagradas de Cristo
                </p>
              </li>
              <li>
                <h6>Consuelo.</h6>
                <p>
                  Oraciones de Consuelo dirigidas al Padre Eterno y a su Hijo Unigénito, constituyen el segundo segmento de esta Devoción.
                  Estas oraciones buscan consolar al Padre y al Hijo por la ingratitud del mundo, las blasfemias y negligencias contra la
                  Preciosa Sangre
                </p>
              </li>
              <li>
                <h6>Adoración.</h6>
                <p>
                  En la tercera parte de la Devoción, se encuentran siete oraciones que adoran, glorifican y hacen peticiones a la Preciosa
                  Sangre. Las peticiones son por toda la Iglesia, su jerarquía, el clero y los fieles. Las súplicas invocando la Preciosa
                  Sangre son ofrecidas también por los pecadores empedernidos, las almas del Purgatorio, por los no-católicos, por las almas
                  devotas y por los niños abortados, para que todos ellos puedan alcanzar los beneficios de la Preciosa Sangre.
                </p>
              </li>
              <li>
                <h6>Reparación.</h6>
                <p>
                  El cuarto segmento de la Devoción trata de la reparación. En las Siete Súplicas Angustiosas, nuestro Señor describe los
                  diferentes pecados cometidos en la Iglesia y el mundo en general, que lo continúan crucificando místicamente. Estos
                  pecados incluyen la negligencia por parte del Clero y de los fieles del Santo Sacrificio de la Misa y los Sacramentos, la
                  falta de pudor que está haciendo que muchos vayan en tropel al Infierno, el materialismo en la Iglesia y en el mundo, el
                  ocultismo, la codicia, la avaricia y muchos otros.
                </p>
              </li>
              <li>
                <h6>Intercesión.</h6>
                <p>
                  Además de las cuatro partes principales, hay oraciones claves de intercesión que nuestro Señor ha revelado como las
                  oraciones que Él dijo durante Su Pasión y antes de exhalar Su último suspiro por nuestra salvación. Incluyen oraciones
                  para vencer a todos los enemigos de la Santa Cruz (el Anticristo y sus seguidores), por el aumento de la fe, la paciencia,
                  por la liberación de maldiciones ancestrales y otras intenciones.
                </p>
              </li>
              <li>
                <h6>El Sello.</h6>
                <p>
                  En esta Devoción se descubre el Gran Sello de Dios, (el Tabernáculo vivo en nuestros corazones) que los Ángeles colocaron
                  en nuestras almas durante la hora del Sello. Sin este Sello, llevaríamos el propio sello del enemigo, el 666. El Gran
                  Sello es renovado luchando continuamente por permanecer en estado de Gracia Santificante. De forma más sencilla, este
                  Sello es una renovación más consciente del sello obtenido por cada cristiano en el Bautismo. La idea aquí, es asegurarlo
                  con mayor auxilio divino en contra de la corrupción del pecado.
                </p>
              </li>
              <li>
                <h6>La Hora de Getsemaní</h6>
                <p>
                  Finalmente, a través de esta Devoción, nuestro Señor está llamando a Sus elegidos a una vigilia todos los jueves por la
                  noche hasta el viernes por la mañana (3:00 a.m.) que Él ha llamado, la Hora de Oración de Getsemaní. Durante este tiempo,
                  los componentes de esta Devoción deben rezarse en conmemoración de la Agonía del Señor en el Huerto.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nosotros;
