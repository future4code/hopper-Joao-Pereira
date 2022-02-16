//Exercícios de interpretação de código
//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)

//Neste caso, retornará: a. undefined. Pois não temos um valor definido para variavel array.

// array = null
// console.log('b. ', array)

//retornará: b. null. Pois a variavel array foi redefinida como null.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

//Retornará: c. 11. Pois a propriedade length contará os elementos dentro do array.

// let i = 0
// console.log('d. ', array[i])

//Retornará: d. 3. pois 0, é a posição que se enconta o elemento 3 dentro do array.

// array[i+1] = 19
// console.log('e. ', array)

//Retornará todos os elementos do array. porem na posição 1, depois do 0, em vez de 4, retornará 19.

// const valor = array[i+6]
// console.log('f. ', valor)

//Retornará: 9. Pois a variavel valor foi definida com o elemento da posição 6 do array. 

// 2. Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// Neste caso retornará: SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita de código


//1.Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem: O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario! 


/*

let nomeDoUsuario = prompt("Digite seu nome:")

let emailDoUsuario = prompt("Digite seu e-mail:")

alert(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}!`)

*/









/*

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
const comidasPreferidas = ["Pizza", "Bolo", "frango frito", "Strogonoff", "Paçoca"]

//a) Imprima no console o array completo

console.log(comidasPreferidas)


//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
console.log(`Essas são as minhas comidas preferidas: 
${comidasPreferidas[0]},
${comidasPreferidas[1]}, 
${comidasPreferidas[2]},
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console nova lista

let novaLista = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = novaLista
console.log(comidasPreferidas)

*/










/*
//3. Faça um programa, seguindo os passos:

    
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    const listaDeTarefas = []
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    listaDeTarefas.push(prompt( "Cite 3 tarefas que precise realizar no dia. Tarefa 0:"))

    listaDeTarefas.push(prompt("Tarefa 1:"))

    listaDeTarefas.push(prompt("Tarefa número 2:"))

// c) Imprima o array no console

    console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2

listaDeTarefas.splice((prompt("Digite o índice da tarefa que você já realizou: 0, 1 ou 2 ")), 1)

// e) Remova da lista o item de índice que o usuário escolheu.

    listaDeTarefas.splice()

// f) Imprima o array no console

console.log(listaDeTarefas)

*/