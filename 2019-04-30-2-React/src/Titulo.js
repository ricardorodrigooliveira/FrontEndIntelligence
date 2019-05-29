import React, {Component} from 'react';

class Titulo extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1> { this.props.msg } </h1>
                <h2> { this.props.subtitulo } </h2>
            </div>
        )
    }
}


/*function Titulo(){
    return (
        <h1>
            Titulo
        </h1>
        )
}*/

export default Titulo;