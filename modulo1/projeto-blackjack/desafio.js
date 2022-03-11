/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//------------------------------------NÃO CONSEGUI COMPLETAR O DESAFIO AINDA.
    
    if(confirm("Boas vindas ao jogo de Blackjack! \nQuer iniciar uma nova rodada?")){
       const cartaIUsuario = comprarCarta()
       const cartaIIUsuario = comprarCarta()
       const cartaIComputador = comprarCarta()
       const cartaIIComputador = comprarCarta()
       const pontuacaoUsuario = cartaIUsuario.valor + cartaIIUsuario.valor
       const pontuacaoComputador = cartaIComputador.valor + cartaIIComputador.valor

       if(cartaIUsuario === cartaIIUsuario || cartaIComputador === cartaIIComputador){
          confirm(`Suas cartas são iguais, vamos sortear novamente.`)
       }
    
       confirm(`Suas cartas são ${cartaIUsuario.texto} e ${cartaIIUsuario.texto}. A carta revelada do computador é ${cartaIComputador.texto}. Deseja comprar mais uma carta?`)
    
       alert(`Computador - cartas: ${cartaIComputador.texto} ${cartaIIComputador.texto} pontuação - ${pontuacaoComputador}`)
    
       if (pontuacaoUsuario === pontuacaoComputador){
          alert("Empate!")
       }else if(pontuacaoUsuario > pontuacaoComputador){
          alert("O usuário ganhou!")
       }else if(pontuacaoComputador > pontuacaoUsuario){
          alert("O computador ganhou!")
       }
    }else{
       alert("O jogo acabou")
    }