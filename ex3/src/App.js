import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { lista: [{nome: "Nome1", idade: 10},
                           {nome: "Nome2", idade: 20}] };
    this.enviarPessoa = this.enviarPessoa.bind(this);
  }

  enviarPessoa(){
    //alert("Pessoa adicionada");
    //console.log(this);
    this.setState({ lista: [...this.state.lista, {nome: "Ricardo", idade: 39} ] })
  }

  render(){
    let fundoVermelho = {background: "red"};
    let x = this.state.lista.map((valor,indice) => {
      if(valor.idade < 18){
        return <li style={fundoVermelho}key={indice}>{valor.nome} - {valor.idade}</li>;
      }else{
        return <li key={indice}>{valor.nome} - {valor.idade}</li>;
      }
    });

    return (
      <div className="App">
        <ul>
          {x}
        </ul>
        <input type="submit" value="Adicionar" onClick={this.enviarPessoa}></input>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

}


export default App;
