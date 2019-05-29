import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titulo msg="esse é meu titulo" subtitulo="esse é meu subtitulo"></Titulo>
        <Formulario txtBotao="Clique Aqui" texto="Muda texto fromulário"></Formulario>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
