import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            texto: "texto com state"
        }
        this.mudaTexto = this.mudaTexto.bind(this);
    }
    alerta(){
        alert("Alerta com onClick");
    }
    mudaTexto(){
        //this.setState({texto: "Mudando texto"}); ou
        this.setState({texto: this.props.texto});
    }
    render(){
        return(
            <div>
                <form>
                    <input type='text' value={ this.state.texto }></input>
                    <input type="button" onClick={ this.mudaTexto } value={ this.props.txtBotao } ></input>
                </form>
            </div>
        )
    }

}

export default Formulario;