//Exercícios de interpretação de código

//1.Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//imprimirá true

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//imprimirá true

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//imprimirá false

console.log("d. ", typeof resultado)
//imprimirá string

//2.Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/
//O erro está em não tranformar o conteúdo do prompt em tipo number. Pois topo conteudo digitado em um prompt é automaticamente string, mesmo sendo número. No caso acima seria impresso no console: Digite um numero!Digite outro numero!

//3.Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

/*
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//Exercícios de escrita de código

//1. Faça um programa que:
/*a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)

d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)
*/



let idadeDoUsuario = Number(prompt("Usuário, qual é a sua idade?"))
console.log("Sua idade é:",idadeDoUsuario)

let idadeMelhorAmigo = Number(prompt("Usuário, qual é a idade do(a) seu/sua melhor amigo(a)?"))
console.log("A idade do(a) seu/sua melhor amigo(a) é:",idadeMelhorAmigo)

let = maiorOuMenor = idadeDoUsuario >= idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?" ,maiorOuMenor)

let diferença = idadeDoUsuario - idadeMelhorAmigo

console.log("A diferença de idade entre vocês é de:", diferença , "anos.")



//2. Faça um programa que:
/*a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/



let numeroPar = Number(prompt("Por favor, insira um número par."))
let resto = numeroPar % 2;
console.log("O resto da divisão desse número dividido por 2 é:", resto)
//Todos os números pares divididos por dois restrão 0
//Se o usuário colocar um numero ímpar sempre retornará: 1





//3.Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 



let suaIdade = Number(prompt("Quantos anos de idade você tem?"))
console.log("Você tem", suaIdade, "anos de idade.")
//a) A idade do usuário em meses
let suaIdadeEmMeses = suaIdade * 12;
console.log("Você tem", suaIdadeEmMeses, "meses de idade.")
//b) A idade do usuário em dias
let suaIdadeEmDias = suaIdadeEmMeses * 30;
console.log("Você tem", suaIdadeEmDias, "dias de idade.")
//c) A idade do usuário em horas
let suaIdadeEmHoras = suaIdadeEmDias * 24;
console.log("Você tem", suaIdadeEmHoras, "horas de idade")



//4.Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

let num1 = Number(prompt("Digite um número:"))//testei com numero 6
let num2 = Number(prompt("Digite um segundo número:"))//testei com numero 2

//O primeiro numero é maior que segundo? true
console.log(num1 > num2);
//O primeiro numero é igual ao segundo? false
console.log(num1 === num2);
//O primeiro numero é divisível pelo segundo? true
console.log( num1 % num2 === 0);
//O segundo numero é divisível pelo primeiro? true
console.log( num2 % num1 ===0);