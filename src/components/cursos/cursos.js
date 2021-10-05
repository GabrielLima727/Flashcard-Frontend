// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

const Contact = () => (
  <Row>
    <Col m={12} s={10}>
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

export default Contact;