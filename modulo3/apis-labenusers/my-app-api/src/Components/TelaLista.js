import React from "react";
import axios from "axios";

export default class TelaLista extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "joao-otavio-hopper"
            }
        }).then((res) => {
            this.setState({usuarios: res.data})
        }).catch((err) => {
            console.log(err.response)
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "joao-otavio-hopper"
            }
        }).then(() => {
            alert("Usuário apagado com sucesso.")
            this.pegarUsuarios()
        }).catch(() => {
            alert("Tente novamente :(")
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.props.filhoDois}>Trocar de Tela</button>
                <h2>Tela de Lista</h2>
                {
                    this.state.usuarios.map((usuario) => {
                        return (
                            <ul>
                                <li>{usuario.name}</li>
                                <button onClick={() => this.deletarUsuario(usuario.id)}>deletar</button>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}