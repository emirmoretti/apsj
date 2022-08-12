import React from "react";
import { Container } from "react-bootstrap";
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
        <div className="oraciones-contentido">
          <p>
            Cada jueves de 11:00 pm a 03:00 am del viernes en la madrugada es la Hora de Getsemaní. Las siguientes oraciones deben ser dichas
            durante este tiempo:
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
          <Audio audioUrl="https://drive.google.com/file/d/1vUEwKpfOVBE2P6H0TT_ovUNdRnpJ--yN/preview"></Audio>
        </div>
      </Container>
    </section>
  );
};

export default Oraciones;
