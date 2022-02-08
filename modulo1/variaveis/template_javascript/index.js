/*

//Exercícios de interpretação de código

//1.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

No código acima, o primeiro comando, console.log(b) irá imprimir o resultado atribuido a variavel, ou seja, 10. Posteriormente, no segundo comando console.log(a, b) o console irá imprimir: 10, 5. Pois o valor de b foi reatribuído.

//2.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
No código acima, o console imprimirá: 10, 10, 10

//3.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert('Você recebe ${t/p} por hora')

Poderiamos escrever o código da seguinte maneira
let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
horasTrabalhadas = Number(horasTrabalhadas)

let valorPorHora = prompt("Quanto você recebe por dia?")
valorPorHora = Number(valorPorHora)

alert('Você recebe ' + ${horasTrabalhadas/valorPorHora} + ' por dia!')
*/

//Exercícios de escrita de código

//1.
/*
let nome = prompt("Digite seu nome");

let idade = prompt("Digite sua idade");
idade = Number(idade);

alert("Olá"+ " " + nome + "," + " você tem " + idade + " anos.");

/*Ao digitar no console o comando: typepf nome, aresposta retornado foi 'string' e ao digitar typeof idade, o retorno foi 'number'. Pois efetuei a conversão da variavel idade de string para número. Caso contrario iria retornar string, mesmo um número sendo digitado no prompt.*/

//2.
/*
let nacionalidade = prompt("Você é brasileiro?")
let feijoada = prompt("Você gosta de feijoada?")
let acai = prompt("Você gosta de açai?")

alert("Você é brasileiro? - " + nacionalidade)
alert("Você gosta de feijoada? - " + feijoada)
alert("Você gosta de açai? - " + acai)
*/

//3.

let a = 10
let b = 25

let c = a //armazenando a variavel a em uma terceira variavel, o valor dela não será perdido

a = b
b = c //a variavel c tem o mesmo valor da a, portando os valores se invertem...

console.log(a)
console.log(b)

