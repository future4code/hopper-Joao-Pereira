import React from "react";
import axios from "axios";

export default class Home extends React.Component {

    state = {
        playlists:""
    }

    olharPlaylist = (event) => {
        this.setState({playlists: event.target.value})
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            "playlist": this.state.playlists
        }

        axios.post(url, body, {
            headers: {
                Authorization: "joao-otavio-hopper"
            }
        }).then(() => {
            alert("Playlist criada com secesso!")
        }).catch((err) => {
            alert("Algo deu errado :(")
        }).finally(() => {
            this.setState({playlists: ""})
        })
    }

    render() {
        return (
            <div>
                <h3>Criar PlayLists</h3>
                <input placeholder="Digite sua playlist" value={this.state.playlists} onChange={this.olharPlaylist}/>
                <button onClick={this.criarPlaylist}>Criar</button><br/><br/>
                {
                    this.state.playlists.localeCompare((playlist) => {
                        return (
                            <ul>
                                <li>{playlist.name}</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}