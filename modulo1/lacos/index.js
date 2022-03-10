//----------------Exercícios de interpretação de código-----------
//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 


//1.O que o código abaixo está fazendo? Qual o resultado impresso no console?

    /*

    let valor = 0
    for(let i = 0; i < 5; i++) {
    valor += i
    }
    console.log(valor)


    */

//Será impresso no console a variavel valor com os numeros de 0 a 4 atribuidos.

//2. Leia o código abaixo:

    /*

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
    if (numero > 18) {
            console.log(numero)
        }
    }

    */

//a) O que vai ser impresso no console?
//Será impresso os numeros maiores de 18 (19, 21, 23, 25, 27 e 30)

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Sim, Apenas trocar o valor 18 por um numero que se enquadre em todos os elementos do array. no caso 0.

//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

    /*

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
    }

    */

// Iria ser impresso 4 linhas com um asterisco em cada linha.

//----------------Exercícios de escrita de código-----------
//1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

        /*

        const pets = Number(prompt("Quantos pets você tem?"))
            const arrayPets = []

        if (pets === 0){
            console.log("Que pena! Você pode adotar um pet!")
        }
        //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

        else if (pets > 0){
            for (let index = 0; index < pets; index++) {
                let nomePets = prompt("Qual o nome deles?")
                arrayPets.push(nomePets);
            }

        }
        console.log(arrayPets)

        */

//2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a) Escreva um programa que imprime cada um dos valores do array original.

console.log("// Resposta item a.")
for (let numero of array) {
        console.log(numero)
}

//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

console.log("// Resposta item b.")
for (let numero of array) {
            console.log(numero/10)
        }

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

console.log("// Resposta item c.")
const newArray = []
for (let numero of array){
    if( numero % 2 === 0 ){
        newArray.push(numero)
    }
    console.log(newArray)
}

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

const novoArray = []
for (let numero of array){
    novoArray.push(`O elemento do índex ${array.indexOf(numero)} é: ${numero}`)
}
console.log(novoArray)

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

const maiorEMenorNumero = (arrayDeNumeros) => {
    let maiorNumero = 0
    let menorNumero = 0
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        let valorMaximo = arrayDeNumeros[i]
        
        if (i === 0) {
            console.log(valorMaximo)
            maiorNumero = menorNumero = valorMaximo
        }
        if (valorMaximo > maiorNumero) {
            maiorNumero = valorMaximo
        }
        if (valorMaximo < menorNumero) {
            menorNumero = valorMaximo
        }
    }
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
  }
  
  maiorEMenorNumero(array)

  //*TIVE MUITA DIFICULDADE NESSE ULTIMO EXERCICIO, E FIZ BASEADO NO CODIGO MOSTRADO NO PLANTÃO.
  