/*-------------Exercícios de interpretação de código-------------*/

//1.Leia o código abaixo

        // function minhaFuncao(variavel){
        //     return variavel * 5
        // }

        // console.log(minhaFuncao(2))
        // console.log(minhaFuncao(10))

//a) O que vai ser impresso no console?
//10 e 50 pq o valor da minhaFuncao irá multiplicar por 5

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//Nada seria impresso, pois o console,log é o responsavel pela impressao da propriedade.

//2. Leia o código abaixo

        // let textoDoUsuario = prompt("Insira um texto")

        // const outraFuncao = function(texto) {
        //     return texto.toLowerCase().includes("cenoura")
        // }

        // const resposta = outraFuncao(textoDoUsuario)
        // console.log(resposta)

//a) Explique o que essa função faz e qual é sua utilidade
// A funcao tem a finalidade de verificar se a frase do usuario tem a palavra cenoura em letras minúsculas.

//b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//i.   Eu gosto de cenoura
//true

// ii.  CENOURA é bom pra vista
//false

// iii. Cenouras crescem na terra
//true

/* -------------Exercícios de escrita de código-------------*/

//1. Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

        function informacoesSobreMim(){
            console.log("Eu sou João, tenho 22 anos, moro em Osasco-SP e sou estudante.")
        }
        informacoesSobreMim()

//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

        function informacoesDeUmaPessoa(nome, idade, cidade, profissao){
            const frase = "Eu sou " + nome + " tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao
            return frase
        }
        const fraseFeita = informacoesDeUmaPessoa(prompt("Qual seu nome?"), prompt("Qual sua idade?"), prompt("Qual sua cidade?"), prompt("Qual sua profissão?"))
        console.log(fraseFeita)

//2. Escreva as funções explicadas abaixo:
//a)Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

        function doisNumeros(num01, num02){
            const soma = num01 + num02
            return soma
        }

        const somaDoisNumero = doisNumeros(10, 15)

        console.log(doisNumeros(10, 15))

//b)Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

        function doisNumerosDiferentes (num001, num002){
            const comparar = num001 >= num002
            return comparar
        }

        const compararDoisNumeros = doisNumerosDiferentes(10, 15)

        console.log(doisNumerosDiferentes(10, 15))

//c)Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

        function verificar (parOuImpar){
            const verificarVar = parOuImpar %2==0
            return verificarVar
        }

        const numeroInserido = verificar(10)

        console.log(verificar(10))

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

        function mensagem(texto){
            const umTexto = texto
            return umTexto
        }
        const txt = mensagem("Olá Mundo!")

        console.log(mensagem("Olá Mundo!"))
        console.log(mensagem("Olá Mundo!".length))
        console.log(mensagem("Olá Mundo".toUpperCase()))

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

        function somaNumeros (numero01, numero02){
            return numero01 + numero02
        }

        function difNumeros (numero01, numero02){
            return numero01 % numero02
        }

        function multNumeros (numero01, numero02){
            return numero01 * numero02
        }

        function divNumeros (numero01, numero02){
            return numero01 / numero02
        }

        let number1 = Number(prompt("Insira um número"))
        let number2 = Number(prompt("Insira outro número"))

        console.log(
            `Números inseridos: ${number1} e ${number2}`)
        console.log( 
            `Soma: ${somaNumeros(number1, number2)}`)
        console.log(
            `Diferença: ${difNumeros(number1, number2)}`)
        console.log(
            `Multiplicação: ${multNumeros(number1, number2)}`)
        console.log(
            `Divisão: ${divNumeros(number1, number2)}`)