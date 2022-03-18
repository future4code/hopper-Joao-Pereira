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
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i+= 2) {
      if (i % 2 == 0) {
          numerosPares.push(i)
      }
  }
  return numerosPares;
}
retornaNPrimeirosPares()

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA === ladoB && ladoB === ladoC){
    return "Equilátero"
  }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    return "Isósceles"
  }else{
    return "Escaleno"
  }
}
classificaTriangulo()

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}
retornaChamadaDeFilme()

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novoObjeto = {
  ...pessoa,
  nome: "ANÔNIMO"}

  return novoObjeto
}
retornaPessoaAnonimizada()

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = []
   for(let pessoa of pessoas){
     if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
       pessoasAutorizadas.push(pessoa)
     }
   }
   return pessoasAutorizadas
}
retornaPessoasAutorizadas()

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = []
   for(let pessoa of pessoas){
     if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60){
       pessoasNaoAutorizadas.push(pessoa)
     }
   }
   return pessoasNaoAutorizadas
}
retornaPessoasNaoAutorizadas()

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}