import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button, Card } from 'react-materialize'
import { NavLink, useParams } from 'react-router-dom'
import api from "../../api/api"

const Form = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const register = async () =>{
		await api.post("", {nome: name, descricao: description});
	}

    return (
        <Card>
            <Row>
                <Input id="nome" placeholder="Nome do curso..." label="Nome do curso"
                    onChange={event => setName(event.target.value)} s={12}
                />

                <Input id="description" placeholder="Descrição do curso..." label="Descrição"
                    onChange={event => setDescription(event.target.value)} s={12}
                />
                <Col s={12} m={12}>
                    <NavLink to="/cursos" ><Button waves='light' className="right grey darken-2">Cancelar</Button></NavLink>

                    <NavLink to="/cursos" ><Button onClick={register} waves='light' className="right grey darken-2">Cadastrar</Button></NavLink>
                </Col>
            </Row>

            <div class="switch">
                <label>
                    Public
                    <input type="checkbox"/>
                    <span class="lever"></span>
                    Private
                </label>
            </div>
        </Card>
    );
}

export default Form;