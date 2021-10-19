//import logo from './logo.svg';
import Saludo from './../Saludo/Saludo';
import './App.css';

function App() {

  const metodoPadre = (descripcion) =>{
    console.log("Soy " + descripcion);
  }
  
  return (
    <div className="App">
      <Saludo nombre="Lucas" edad="23" metodoPadre={metodoPadre}/>
      <Saludo nombre="Leiva" edad="28" metodoPadre={metodoPadre}/>
    </div>
  );
}

export default App;
