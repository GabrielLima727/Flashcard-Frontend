// Importando o React
import React from "react";
import { NavLink } from 'react-router-dom';

import Card from './card'

const Cursos = (props) => {
  return (
    <div>
      <div class="row">
        <div class="rowc">
          <h5>Cursos</h5>
          <NavLink to="/form"><a class="grey waves-effect waves-light btn">Adicionar</a></NavLink>
        </div>
          {props.coursesData.map(course => (
            <Card 
              title={course.nome}
              desc={course.descricao} />
          ))};
        </div>
    </div>
  );
};

export default Cursos;