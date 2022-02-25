console.log("Exercícios - Condicionais")


//---------------------Exercícios de interpretação de código

//1. Leia o código abaixo:

        // const respostaDoUsuario = prompt("Digite o número que você quer testar")
        // const numero = Number(respostaDoUsuario)

        // if (numero % 2 === 0) {
        // console.log("Passou no teste.")
        // } else {
        // console.log("Não passou no teste.")
        // }

//a) Explique o que o código faz. Qual o teste que ele realiza? 
/*O código verifica se o numero inserido pelo usuario é impar ou par. Ele pega o numero inserido e divide por 2, se o resto der 0 é par. Do contrario é impar.*/

//b) Para que tipos de números ele imprime no console "Passou no teste"?
//Numeros pares.

//c) Para que tipos de números a mensagem é "Não passou no teste"? 
//Numeros impares.


//2.O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

        // let fruta = prompt("Escolha uma fruta")
        // let preco
        // switch (fruta) {
        // case "Laranja":
        //     preco = 3.5
        //     break;
        // case "Maçã":
        //     preco = 2.25
        //     break;
        // case "Uva":
        //     preco = 0.30
        //     break;
        // case "Pêra":
        //     preco = 5.5
        //     break; // BREAK PARA O ITEM c.
        // default:
        //     preco = 5
        //     break;
        // }
        // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
//Para mostrar o preço do produto que o cliente escolher.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//O preço da fruta, Maçã, é, R$ 2.25

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//O codigo iria puxar o ultimo valor atribuido a variavel preco, no caso 5.

//3. Leia o código abaixo:

        // const numero = Number(prompt("Digite o primeiro número."))

        // if(numero > 0) {
        // console.log("Esse número passou no teste")
        //     let mensagem = "Essa mensagem é secreta!!!"
        // }

        // console.log(mensagem)

//a) O que a primeira linha está fazendo?
//Definindo um valor para a variavel numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Se fosse 10: Esse número passou no teste. Pois é maior que 0.
//Se fosse -10: Nada, pois -10 não é maior que 0.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim, o let mensagem está fora do escopo onde ela pode ser acessada.





















//---------------------Exercícios de escrita de código

//1. 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`



                                



                const idade = Number(prompt(`Quantos anos você tem?`))

                if(idade >= 18){
                    console.log(`Você pode dirigir`)
                }else{
                    console.log(`Você não pode dirigir`)
            }

                                


















            
//2.Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

        const turno = prompt("Em que turno você estuda? Responda com M (matutino), V (Vespertino) ou N (Noturno).").toUpperCase().trim()

        if(turno == "M"){
            console.log("Bom Dia!")
        }else if(turno == "V"){
            console.log("Boa Tarde!")
        }else if(turno == "N"){
            console.log("Boa Noite!")
        }




//3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.


        // const turno = prompt("Em que turno você estuda? Responda com M (matutino), V (Vespertino) ou N (Noturno).").toUpperCase().trim()

        switch(turno){
            case "M":
                console.log("Bom dia!")
                break
            case "V":
                console.log("Boa Tarde!")
                break
            case "N":
                console.log("Boa Noite!")
                break
            default:
                console.log("Você não digitou um valor valido.")
                break
        }


//4.Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


        // let filme = prompt("Qual o gênero de filme que vão assistir?").toLowerCase().trim()

        // let preco = Number(prompt("Qual o valor do ingresso?"))

        // if(filme == "fantasia" && preco <= 15 ){
        //     console.log("Bom filme!")
        // }else{
        //     console.log("Escolha outro filme :(")
        // }


//----------------DESAFIO

let filme = prompt("Qual o gênero de filme que vão assistir?").toLowerCase().trim()

let preco = Number(prompt("Qual o valor do ingresso?"))


if(filme == "fantasia" && preco <= 15 ){
    let lanche = prompt("Qual snack que você quer comprar?")
    console.log(`Bom filme! Aproveite o seu ${lanche}!`)
}else{
    console.log("Escolha outro filme :(")
}












