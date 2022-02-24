/*--------------Exercícios de interpretação de código--------------*/

//1.  Leia o código abaixo

    /*

    const filme = {
        nome: "Auto da Compadecida", 
        ano: 2000, 
        elenco: [
            "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
            "Virginia Cavendish"
            ], 
        transmissoesHoje: [
            {canal: "Telecine", horario: "21h"}, 
            {canal: "Canal Brasil", horario: "19h"}, 
            {canal: "Globo", horario: "14h"}
            ]
    }

    console.log(filme.elenco[0])  
    console.log(filme.elenco[filme.elenco.length - 1]) 
    console.log(filme.transmissoesHoje[2]) 

    // a) O que vai ser impresso no console?
        //SERÁ IMPRESSO:
        // "Matheus Nachtergaele"
        // "18 Virginia Cavendish"
        // "canal: "Globo", horario: "14h"

    */

//2. Leia o código abaixo

    /*

    const cachorro = {
        nome: "Juca", 
        idade: 3, 
        raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)

    //a) O que vai ser impresso no console?
        //SERÁ IMPRESSO:
        //nome: "Juca", idade: 3, raca: "SRD"
        //nome: "Juba", idade: 3, raca: "SRD"
        //nome: "Jubo", idade: 3, raca: "SRD"

    //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
        //espelha, ou copia todo objeto ou array inteiro. A sintaxe é chamada de espalhamento ou spread.

    */

//3.Leia o código abaixo

    /*

    function minhaFuncao(objeto, propriedade) {
        return objeto[propriedade]
    }

    const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))

    //a) O que vai ser impresso no console?
        //SERÁ IMPRESSO:
        //false
        //Undefined

    //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
        //No primeiro console, foi impresso a propriedade backender do obejto pessoa. No segundo foi impresso a propriedade altura do obejto pessoa. Porem o retorno foi undefined por que a propriedade nao tinha valor atribuido.

    */


/*--------------Exercícios de escrita de código--------------*/

//1. Resolva os passos a seguir: 
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

        

const pessoa = {
    nome: "João Otavio",
    apelidos: ["Pé", "Barba", "Joãozinho"],
}

function funcao(informações){
    return informações
}

const mensagem = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`

console.log(funcao(mensagem))


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novaPessoa = {
    ...pessoa,
    apelidos: ["Jhow", "Jon", "Dão"]
}

console.log(funcao(novaPessoa))


            








































            


//2. Resolva os passos a seguir: 
//a)Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

        

const pessoaUm = {
    nome: "Ross Geller",
    idade: 30,
    profissao: "Paleontólogo"
}


const pessoaDois = {
    nome: "Monica Geller",
    idade: 30,
    profissao: "Chef de cozinha"
}
//b)Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

function recebeObj(infoPessoas){
    return [infoPessoas.nome, infoPessoas.nome.length, infoPessoas.idade, infoPessoas.profissao, infoPessoas.profissao.length]
}
console.log(recebeObj(pessoaUm))
console.log(recebeObj(pessoaDois))


























            

//3. Resolva os passos a seguir: 
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

const carrinho = []

    const fruta01 = {
        nome: "Uva",
        disponibilidade: true
    }
    const fruta02 = {
        nome: "Maçã",
        disponibilidade: false
    }
    const fruta03 = {
        nome: "Melancia",
        disponibilidade: true
    }

    function minhasFrutas(objFrutas){
        carrinho.push(objFrutas)
        return [fruta01, fruta02, fruta03]
    }
    minhasFrutas(fruta01, fruta02, fruta03)
console.log(minhasFrutas(carrinho))