import React from "react";

const Table = () => {
  return (
    <div className="table-container p-4 bg-white" data-aos="fade-up" data-aos-duration="3000">
      <h4 className="underline py-3 fs-3 fst-italic">Comisión Nacional</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Miembros Servidores</th>
            <th scope="col">Comisión Ejecutiva Nacional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Padre Isidro (Crisanto Ciprés Zamora)</th>
            <td>Sacerdote y Director Espiritual</td>
          </tr>
          <tr>
            <th scope="row">José Luis Ejarque </th>
            <td>Servidor Nacional</td>
          </tr>
          <tr>
            <th scope="row">
              Olga Rosario Anze <br /> Silvio Barreiro
            </th>
            <td>Servidores de Buenos Aires</td>
          </tr>
          <tr>
            <th scope="row">
              Juan C. Bevilacqua <br /> María A. Tricarico
            </th>
            <td>Servidores de C.A.B.A</td>
          </tr>
          <tr>
            <th scope="row">Silbana Berrocá </th>
            <td>Servidora de San Juan</td>
          </tr>
          <tr>
            <th scope="row">María Angélica Sack</th>
            <td>Servidora de Córdoba</td>
          </tr>
          <tr>
            <th scope="row">
              María Isabel Solís <br /> María Ávalos
            </th>
            <td>Servidoras de Corrientes</td>
          </tr>
          <tr>
            <th scope="row">Graciela Noir</th>
            <td>Servidora Nacional Suplente de Entre Ríos</td>
          </tr>
          <tr>
            <th scope="row">
              M. Angelina Fraguas <br /> Marcela Antunez
            </th>
            <td>Servidoras de Mendoza</td>
          </tr>
          <tr>
            <th scope="row">
              Mirta Barrientos <br /> Carla Bratti
            </th>
            <td>Servidoras de Santa Cruz</td>
          </tr>
          <tr>
            <th scope="row">
              Ariel Alcaraz <br /> Julia Aranda
            </th>
            <td>Servidores de Formosa</td>
          </tr>
          <tr>
            <th scope="row">
              Karina Amicone
            </th>
            <td>Servidora de Neuquén</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
