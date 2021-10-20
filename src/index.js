import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodos from './components/Metodos/Metodos';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros/SumarNumeros';
import Padre from './components/Matematicas/Padre';
import Contador from './components/Contador/Contador';
import PadreDibujo from './components/MatematicasDibujo/PadreDibujo';
import Car from './components/Car/Car';

ReactDOM.render(
  <div className="App">
    {/* <Metodos/> 
    <Saludo nombre="Lucas" edad="22"/>
    <Saludo nombre="Juan" edad="23"/> 
    <App /> 
    {/* <SumarNumeros Numero1="5" Numero2="88"/>
    <SumarNumeros Numero1="999" Numero2="8888"/>
    <SumarNumeros Numero1="789" Numero2="7821"/> 
    <Contador Inicio="5"/>
    <Contador Inicio="5000"/>
    <Contador Inicio="500"/>
    <Contador Inicio="50"/>
    <PadreDibujo/>*/}
    <Car Marca="Pontiac" Modelo="Firebird" Aceleracion="20" VelocidadMaxima="210"/>
    <Car Marca="Seat" Modelo="600" Aceleracion="10" VelocidadMaxima="120"/>
    <Car Marca="Audi" Modelo="A6 Sportback" Aceleracion="40" VelocidadMaxima="310"/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
