// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button  } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';

const Home = () => (
  <Row>
    <Col m={12} s={10}>
        <h5 className="subtitle">Sobre a a escola</h5>
        <Card>
          <div>
            <p><b>Sobre nós</b></p>
            <p>Somos uma instituição focada no ensino de qualidade, visando o aprendizado de nossos alunos através de diversos cursos para aprimoramento dos mesmos. Com isso, buscamos estar crescendo cada vez mais para poder atingir um público maior.</p>
            <br/>
            </div>
        </Card>
        <br/>
        <h5 className="subtitle">Cursos</h5>
        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Cursos oferecidos pela instituição"
                    description="Entre os diversos cursos oferecidos pela nossa instituição, os mais notáveis são os de Matemática, Física, Química e os de programação (Java, Python, Ruby, etc). Confira na aba Cursos todos os quais oferecemos."
                    avatar={company_avatar}
        />
        <br/>
        <h5>Alguma dúvida? Fale conosco</h5>
        <Card>
          <Row>
              <Input placeholder="Email@exeplo.com" type="email" label="Email" s={12} />
              <Input placeholder="Digite sua mensagem..." label="Message" s={12} />
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2">Enviar</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Home;