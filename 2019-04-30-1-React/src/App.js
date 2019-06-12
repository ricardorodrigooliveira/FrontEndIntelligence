import React, {Component} from 'react';
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
    let x = this.state.lista.map
    (
      (valor,indice) => {
        return <li style={fundoVermelho}key={indice}>{valor.nome} - {valor.idade}</li>;
      }
    );

    return (
      <div className="App">
        <input type="submit" value="Adicionar" onClick={this.enviarPessoa}></input>
        
        <header className="App-header"></header>
      </div>
    );
  }

}


export default App;
