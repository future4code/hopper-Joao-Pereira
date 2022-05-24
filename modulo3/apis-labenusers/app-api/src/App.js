import './App.css';
import React from 'react';
import axios from 'axios';
import Cadastro from './Components/Cadastro';
import Listas from './Components/Listas';

class App extends React.Component {

  state = {
    telaAtual:"cadastro"
  }

  trocarTela = () => {
    this.setState({telaAtual: this.state.telaAtual === "cadastro"} 
    ? "lista" 
    : "cadastro")
  }

  render() {
    return (
      <div className="App">
        {
          this.state.telaAtual === "cadastro" ? <Cadastro/> : <Listas/>
        }
      </div>
   )
  }
}

export default App;
