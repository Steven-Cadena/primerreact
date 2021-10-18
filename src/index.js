import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Saludo from './components/Saludo/Saludo';
import Metodos from './components/Metodos/Metodos';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Metodos/> 
    <Saludo nombre="Lucas" edad="22"/>
    <Saludo nombre="Juan" edad="23"/>
  </div>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
