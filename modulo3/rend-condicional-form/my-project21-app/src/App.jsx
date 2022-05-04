import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import React from 'react'
import { DadosGerais } from './componentes/DadosGerais'
import { InformacoesDoEnsinoSuperior } from './componentes/InformacoesDoEnsinoSuperior'
import { InformacoesGeraisDeEnsino } from './componentes/InformacoesGeraisDeEnsino'
import { Agradecimento } from './componentes/Agradecimento'

export class App extends React.Component {
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    let avanca = (this.state.etapa += 1)
    if (avanca <= 4){
      return this.setState({ etapa : avanca})
    }
  }

  renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <DadosGerais/>

      case 2:
        return <InformacoesDoEnsinoSuperior/>

      case 3:
        return <InformacoesGeraisDeEnsino/>

      case 4:
        return <Agradecimento/>

      default:
        break;  
    }
  }
  render(){
    return (
      <div className="App"><br/>
      {this.renderizaEtapa()}
      <br/>
      {this.state.etapa <= 3 ? 
      <>
      <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      </> : null}
       
      </div>
    )
  }
}

export default App
