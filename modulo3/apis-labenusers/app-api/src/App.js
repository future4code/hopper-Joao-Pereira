import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

export class App extends React.Component {

  state = {
    body = {
      "name": "",
      "email": ""
    }
  }

  funcaoCadastrar = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "joao-otavio-hopper"
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Tela de Cadastro</h1>

        <label>&#x1f4e7;</label>
        <input type='email' placeholder='E-mail'></input><br/>

        <label>&#x1f642;</label>
        <input type='text' placeholder='Nome'></input><br/>
        <button onClick={this.funcaoCadastrar}>Cadastrar</button>
      </div>
   );
  }
}

export default App;
