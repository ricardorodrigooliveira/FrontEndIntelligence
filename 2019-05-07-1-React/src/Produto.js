import React, {Component} from "react";

class Produto extends Component{
    constructor(props){
        super(props);
    }

    imprimeCor(cor, posicao){
        return <option key={posicao}>{cor}</option>
    }

    imprimeEnvio(item, posicao){
        return <option key={posicao}>{posicao+1} - {item}</option>;
    }

    render(){
        var retornoModal = this.props.envio.map(this.imprimeEnvio);
        var retornoCor = this.props.cor.map(this.imprimeCor);

        return (
            <div>
                <h1>
                    Produto
                </h1>
                <p> { this.props.nome } - { this.props.preco } </p>
                <select>
                    {retornoModal}
                </select>
                <br/>
                <select>
                    {retornoCor}
                </select>
            </div>
        )
    }
}

export default Produto;