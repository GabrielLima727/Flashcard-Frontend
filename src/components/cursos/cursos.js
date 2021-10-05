// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col,} from 'react-materialize';
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png';
import foto1 from '../../images/foto1.jpg';
import foto2 from '../../images/foto2.jpg';
import foto3 from '../../images/foto3.jpg';
import foto4 from '../../images/foto4.jpg';
import foto5 from '../../images/foto5.jpg';
import foto6 from '../../images/foto6.jpg';
import foto7 from '../../images/foto7.jpg';
import foto8 from '../../images/foto8.jpg';
import foto9 from '../../images/foto9.jpg';

const Contact = () => (
  <Row>
    <Col m={12} s={10}>
    <h5 className="subtitle">Cursos</h5>
        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Biologia"
          avatar={foto1}
        />

        <Experience title="Computação gráfica"
          avatar={foto2}
        />

        <Experience title="Design web"
          avatar={foto3}
        />

        <Experience title="Engenharia da computação"
          avatar={foto4}
        />

        <Experience title="Linguagens de programação"
          description="Python, Ruby, C#, C++, Java"
          avatar={foto5}
        />

        <Experience title="Matemática"
          avatar={foto6}
        />

        <Experience title="Física"
          avatar={foto7}
        />

        <Experience title="Química"
          avatar={foto8}
        />

        <Experience title="Geografia"
          avatar={foto9}
        />
    </Col>
  </Row>
);

export default Contact;