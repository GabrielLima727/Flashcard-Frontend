// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
import Cursos from "./components/cursos/cursos";
import Form from "./components/cursos/form"
// Importanto o component <Routes /> e <Route /> da nossa Lib de rotas
import { Route, Routes } from 'react-router-dom';

const Main = (props) => (
    <Routes>
        <Route exact path='/' element={ <Home />}/>
        <Route path='/cursos' element={ <Cursos coursesData={props.coursesData}/>}/>
        <Route path='/form' element={ <Form /> }/>
    </Routes>
);

export default Main;