import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './imgs/eu-tranparente-1.png'
import emailImagem from './imgs/email.png'
import addressImagem from './imgs/local.png'
import downloadImagem from './imgs/download.png'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ minhaFoto } 
          nome="João Otávio" 
          descricao="Oi, eu sou o João Otávio. Sou aspirante a programador, aluno em formação da Labenu. Buscando de uma transição de carreira, pensando nisso, quero estar sempre afiado quando o assunto é programação. Pretendo me tornar um especialista Front-end."
        />
        
        <ImagemButton 
          imagem={downloadImagem} 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem={emailImagem}
          campo="E-mail:" 
          conteudo="⠀joao.otavio@labenu.com.br"
          />

        <CardPequeno
          imagem={addressImagem}
          campo="Endereço:"
          conteudo="⠀Av. Brasil, 545 São Paulo, 06000-100 "
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
