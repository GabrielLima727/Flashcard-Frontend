import React, { useState } from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink} from 'react-router-dom'
import api from "../../api/api"

const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const regist = async () =>{
		await api.post("", {nome: name, descricao: description});
	}

    return (
        <Row>
            <Input placeholder="Nome do curso..." label="Nome do curso" onChange={event => setName(event.target.value)} s={12} />
            <Input placeholder="Descrição do curso..." label="Descrição" onChange={event => setDescription(event.target.value)} s={12} />
            <Col s={12} m={12}>
                <NavLink to="/courses" ><Button onClick={regist} waves='light' className="right grey darken-2">Cadastrar</Button></NavLink>
            </Col>
        </Row>
    );
}

export default Form;