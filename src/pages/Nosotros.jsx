import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import img2 from "../assets/images/imagen-2.jpeg";

import "./styles/Nosotros.scss";
import poster1 from "../assets/images/Poster_Rostro_Jesucristo_Agonizante-1.webp";
import poster2 from "../assets/images/Poster_Rostro_Jesucristo_Agonizante-2.webp";

const Nosotros = () => {
  return (
    <div id="section-nosotros">
      <div className="first-section-title">
        <h2>Introducción a la Preciosísima Sangre de Jesucristo</h2>
        <Container>
          <div className="video-container">
            <div className="ratio ratio-21x9 d-flex">
              {
                /*
                <iframe
                  src="https://drive.google.com/file/d/1iTuTKvJUuI_hbKvi51fQCK1J4R95R0C5/preview"
                  allow="autoplay"
                  className="embed-responsive-item"
                  allowFullScreen
                ></iframe>
                 */
              }
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                <img src={poster1} alt={poster1} className="img-fluid shadow-lg bg-body" style={{margin: '0 auto'}}/>
                <img src={poster2} alt={poster2} className="img-fluid shadow-lg bg-body" style={{margin: '0 auto'}}/>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="info-container">
          <div className="section-title">
            <h3 className="underline">Sobre Nosotros</h3>
            <h4 className="titulo">DEVOCION A LA PRECIOSISIMA SANGRE DE NUESTRO SEÑOR JESUCRISTO</h4>
          </div>
          <div className="first-text">
            <Row className="p-3">
              <Col md={8}>
                <div data-aos="fade-right" data-aos-duration="3000">
                  <p>
                    La Devoción a la Preciosísima Sangre de Nuestro Jesucristo no es una nueva devoción en la Santa Iglesia Católica. Es tan
                    antigua como el primer Jueves Santo, cuando Jesús instituyó el Sacerdocio y la Santa Eucaristía. La proclamación de las
                    siguientes palabras en la noche antes de su Sufrimiento: “Este es mi cuerpo, que es entregado por vosotros. Haced esto
                    en memoria mía. Este cáliz es la nueva alianza en mi sangre, que es derramada por vosotros”. (Lc. 22, 19-20), evocó de
                    los Apóstoles un fervor religioso sublime o reverencia. Antes de esto, Jesús había realizado grandes milagros, pero
                    ellos vieron el milagro de milagros en la institución de la Eucaristía, el Sacrificio de la Cruz, el sacrificio de la
                    Nueva Ley, el Sacramento más admirable, la presencia maravillosa, y el permanente memorial de la Pasión de Cristo.
                    Viendo a Cristo colocándose a si mismo, ante ellos, como un sacrificio de reconciliación o de salvación, y como comida
                    de vida eterna, -el más precioso y maravilloso banquete- los hizo a ellos adorar la maravillosa presencia con una fe que
                    va más allá de lo descriptible. Desde entonces ha sido siempre así en la Santa Iglesia Católica y lo seguirá siendo
                    hasta que el Señor regrese en su gloria. Este es el mandamiento del Señor. Debemos seguir proclamando a la muerte del
                    Señor hasta que Él regrese (cfr.1 Co. 11,26).
                  </p>
                  <p>
                    Mientras la Iglesia continúe celebrando la Santa Eucarística en obediencia al mandato del Señor, “Hagan esto en memoria
                    Mía”, ella mantiene a través del tiempo su devoción a través de la Preciosa Sangre y Cuerpo de Nuestro Señor Jesucristo.
                    Ella ofrece un sacrificio vivo, un memorial perpetuo de su Pasión, el cual muestra la inmensidad del amor Cristo por
                    nosotros. La mejor manera en que cada uno de nosotros pueda demostrar nueva devoción al Señor Eucarístico es
                    recibiéndole a Él en la Sagrada Comunión y participando activa y reverentemente en la Santa Misa. Si sabemos
                    verdaderamente que la Eucaristía es el Sacrificio de la Cruz, adoraremos con mayor atención y devoción, y resistiremos a
                    todas las tendencias de convertir la Misa en un salón de baile o en una reunión de recaudación de fondos.
                  </p>
                  <p>
                    La Misa es la representación del Ministerio Pascual. Es a la vez e inseparablemente, el memorial sacrificial en que se
                    perpetúa el sacrificio de la cruz, y el banquete sagrado de la comunión en el Cuerpo y la Sangre del Señor. En la Misa
                    nos hacemos uno con Jesús y con los demás. Nuestras almas son llenadas de gracias y se nos da una prenda de la gloria
                    futura. Todos estos tesoros inestimables merecen de nuestra devoción. La devoción al Señor Eucarístico continúa en la
                    Bendición, en la visita frecuente al Señor en el Santísimo Sacramento y en la exposición del Santísimo Sacramento. En
                    estos también vemos la devoción a la Preciosa Sangra de Jesucristo, porque como una persona viva, Su Sangre no puede ser
                    separada de Su Cuerpo.
                  </p>
                </div>
              </Col>
              <Col>
                <div data-aos="zoom-in" data-aos-duration="3000">
                  <img src={img2} alt="" className="img-fluid shadow-lg p-2 mb-5 bg-body rounded" />
                </div>
              </Col>
            </Row>
            <blockquote className="text-muted fs-6 fw-light">
              + Ayo - María Atoyebi. OP Obispo de la Diócesis de Llorin (Nigeria) 17 de Junio de 2007 Solemnidad del Cuerpo y la Sangre de
              Cristo.
            </blockquote>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nosotros;
