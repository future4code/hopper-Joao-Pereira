const mensagemInicial = "Boas vindas ao jogo de Blackjack!"
console.log(mensagemInicial)
if(confirm("Quer iniciar uma nova rodada?")){
   const cartaIUsuario = comprarCarta()
   const cartaIIUsuario = comprarCarta()
   const cartaIComputador = comprarCarta()
   const cartaIIComputador = comprarCarta()
   const pontuacaoUsuario = cartaIUsuario.valor + cartaIIUsuario.valor
   const pontuacaoComputador = cartaIComputador.valor + cartaIIComputador.valor

   console.log(`Usuário - cartas: ${cartaIIUsuario.texto} ${cartaIIUsuario.texto} pontuação - ${pontuacaoUsuario}`)

   console.log(`Computador - cartas: ${cartaIComputador.texto} ${cartaIIComputador.texto} pontuação - ${pontuacaoComputador}`)

   if (pontuacaoUsuario === pontuacaoComputador){
      console.log("Empate!")
   }else if(pontuacaoUsuario > pontuacaoComputador){
      console.log("O usuário ganhou!")
   }else if(pontuacaoComputador > pontuacaoUsuario){
      console.log("O computador ganhou!")
   }
}else{
   console.log("O jogo acabou")
}

   //  const carta = comprarCarta(); 
   //  // Sorteia uma carta. Por exemplo, o rei de ouros
    
   //  console.log(carta.texto) 
   //  // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   //  console.log(carta.valor) 
   //  // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)