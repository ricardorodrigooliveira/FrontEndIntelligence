import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produto from "./Produto"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Produto nome="Mouse"
                 preco="R$45,90" 
                 envio={["Correios","Sedex","Ricardo Express"]} 
                 cor={["Preto","Vermelho","Azul","Branco"]}></Produto>
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
