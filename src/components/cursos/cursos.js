// Importando o React
import React, {useEffect, useState} from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import { NavLink } from 'react-router-dom';
import api from "../../api/api"
import Card from './card'

const Cursos = (props) => {

  const [courses, setCourses] = useState([{}]);

  const pagina = 1;

  useEffect(
    () => {
      api.get("")
        .then(response => setCourses(response.data))
    },
    pagina
  );

  return (
    <div>
      <div class="row">
        <div class="rowc">
          <h5>Cursos</h5>
          <NavLink to="/form"><a class="grey waves-effect waves-light btn">Adicionar</a></NavLink>
        </div>
        {courses.map(course => (
          <Card
            course={course}
          />
          ))}
      </div>
    </div>
  );
};

export default Cursos;