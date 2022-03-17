// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
retornaTamanhoArray()

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido()

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a,b){
        return a - b
    }
  return array.sort(compararNumeros)
}
retornaArrayOrdenado()

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let newArray = []

  for(item of array){
      if(item % 2 === 0){
          newArray.push(item)
      }
  }
  return newArray
}
retornaNPrimeirosPares()

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let newArray = []

    for(item of array){
        if(item % 2 === 0){
            newArray.push(item * item)
        }
    }
    return newArray
}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let mariorNum = array[0]
    for(let i = 0; i < array.length; i++){
      if(array[i] > mariorNum){
          mariorNum = array[i]
      }
  }
    return mariorNum
}
retornaMaiorNumero()

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objeto = {
  maiorNumero: Math.max(num1, num2),
  maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
  diferenca: Math.max(num1, num2) - Math.min(num1, num2)
}
return objeto
}
retornaObjetoEntreDoisNumeros()

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}