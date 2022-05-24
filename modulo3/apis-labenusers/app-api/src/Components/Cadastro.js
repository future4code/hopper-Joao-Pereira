import React from "react";

export default class Cadastro extends React.Component {

    state = {
        nome:"",
        email:""
    }

    pegarNome = (event) => {
        this.setState({nome:event.target.value})
    }

    pegarEmail = (event) => {
        this.setState({email:event.target.value})
    }

    render(){
        return(
            <div>
               <h2>Tela de Cadastro</h2>

               <input placeholder="Nome" value={this.state.nome} onChange={this.pegarNome}/>
               <input placeholder="E-mail" value={this.state.email} onChange={this.pegarEmail}/>
            </div>
        )
    }
}

// 42:32