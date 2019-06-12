import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       meusRepos: undefined,
       avatar: ""
    }
    this.pegaDados = this.pegaDados.bind(this);
  }
  
  pegaDados(){
    //https://api.github.com/emojis
    //alert("teste");
    //"https://api.github.com/users/ricardorodrigooliveira/repos
    fetch("https://api.github.com/users/ricardorodrigooliveira/repos").then( x=> x.json()).then(   (dados) => {
      //aqui dentro, você terá acesso aos dados através da variável "dados"
      // para ver seu conteúdo:
      console.log(dados);
      this.setState({meusRepos: dados});
      this.setState({avatar: dados[0].owner.avatar_url});
    });
  }
  
  render() {
    let x = "";
    if(this.state.meusRepos != undefined){
      x = this.state.meusRepos.map((valor, idx) => {
        return <li key={idx}><h3>{valor.name}</h3></li>
      });
    }else{
      x = <li><h1>Não foram encontrados repositorios</h1></li>
    }

    return (
      <div>
        <img src={this.state.avatar}/>
        <ul>{x}</ul>
        <input type="button" onClick={this.pegaDados} value="Ver"></input>
      </div>
    )
  }
}

export default App;
