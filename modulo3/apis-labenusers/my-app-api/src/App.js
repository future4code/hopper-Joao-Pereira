import React from 'react';
import './App.css';
import axios from 'axios';
import TelaCadastro from './Components/TelaCadastro';
import TelaLista from './Components/TelaLista';

class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }

  trocarDeTela = () => {
    this.setState({telaAtual: this.state.telaAtual === "cadastro" 
    ? "lista" 
    : "cadastro"})
  }

  render () {
    return (
      <div className="App">
        {
          this.state.telaAtual === "cadastro" 
          ? <TelaCadastro filhoUm={this.trocarDeTela}/> 
          : <TelaLista filhoDois={this.trocarDeTela}/>
        }
      </div>
    );
  }
  
}

export default App;
