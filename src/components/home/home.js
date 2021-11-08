import React from "react";
import { Row, Col, Input, Card, Button} from 'react-materialize'
import Experience from "../experience/experience"
import img from "../../images/foto1.jpg"
import company_avatar from '../../images/company.png';


const Home = () =>(
  <div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Trajetória</h2>
        <p class="grey-text text-darken-3 lighten-3">Somos uma instituição de ensino superiorbrasileira, sediada em São Paulo, com diversos cursos de técnico, graduação, pós-graduação, mestrado e doutorado. Buscamos através de um método de ensino focado na execução prática das atividades ajudar nossos alunos a evoluírem cada vez mais.</p>
        <br/>
        <h2 class="header">Missão</h2>
        <p class="grey-text text-darken-3 lighten-3">Participação no processo de construção e difusão do conhecimento e da cultura, de forma criativa e inovadora, tornando-os acessíveis à sociedade e contribuindo para o desenvolvimento do ser humano em todas as suas potencialidades, promovendo, assim, mudanças regionais e interlocução nacional e internacional, por meio do ensino, da pesquisa e da extensão.</p>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax"><img alt="" src="http://materializecss.com/images/parallax2.jpg"/></div>
    </div>

    <div class="section white">
      <div class="row container">
      <h5 className="subtitle">Cursos</h5>
        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Cursos oferecidos pela instituição"
                    description="Entre os diversos cursos oferecidos pela nossa instituição, os mais notáveis são os de Matemática, Física, Química e os de programação (Java, Python, Ruby, etc). Confira na aba Cursos todos os quais oferecemos."
                    avatar={company_avatar}
        />
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax"><img alt="" src={img}/></div>
    </div>

    <div class="section white">
      <div class="row container">
      <h5 className="subtitle">Alguma dúvida? Fale conosco</h5>
      <p class="grey-text text-darken-3 lighten-3"><Card>
          <Row>
              <Input placeholder="Email@exeplo.com" type="email" label="Email" s={12} />
              <Input placeholder="Digite sua mensagem..." label="Message" s={12} />
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2">Enviar</Button>
            </Col>
          </Row>
        </Card></p>
      </div>
    </div>
  </div>
)

export default Home