import React from "react";

const Table = () => {
  return (
    <div className="table-container p-4">
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
            <td>Servidores Buenos Aires</td>
          </tr>
          <tr>
            <th scope="row">
              Juan C. Bevilacqua <br /> María A. Tricarico
            </th>
            <td>Servidores C.A.B.A</td>
          </tr>
          <tr>
            <th scope="row">Silbana Berrocá </th>
            <td>Servidora San Juan</td>
          </tr>
          <tr>
            <th scope="row">María Angélica Sack</th>
            <td>Servidora Córdoba</td>
          </tr>
          <tr>
            <th scope="row">
              M. Isabel Solís <br /> María Ávalos
            </th>
            <td>Servidores de Formosa</td>
          </tr>
          <tr>
            <th scope="row">Graciela Noir</th>
            <td>Servidora de Entre Ríos</td>
          </tr>
          <tr>
            <th scope="row">
              M. Angelina Fraguas <br /> Marcela Antunez
            </th>
            <td>Servidoras de Mendoza</td>
          </tr>
          <tr>
            <th scope="row">Mirta Barrientos <br/> Carla Bratti</th>
            <td>Servidoras de Santa Cruz</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
