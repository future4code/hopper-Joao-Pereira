// Exercício 1
// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

let minhaString: string = "Está é uma frase."

// minhaString = 5

// Não dá, retorna o seguinte aviso: O tipo 'number' não pode ser atribuído ao tipo 'string'.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: string | number = 100

meuNumero = "Cem"

// Para isso, usamos union type.

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

// let pessoa: { nome: string, idade: number, corFavorita: string} = {
//     nome: "José",
//     idade: 50,
//     corFavorita: "Amarelo"
// }

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum CoresDoArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

let pessoaUm: Pessoa = {
    nome: "José",
    idade: 50,
    corFavorita: CoresDoArcoIris.AMARELO
}

let pessoaDois: Pessoa = {
    nome: "Nathalia",
    idade: 25,
    corFavorita: CoresDoArcoIris.VERDE
}

let pessoaTres: Pessoa = {
    nome: "Katia",
    idade: 30,
    corFavorita: CoresDoArcoIris.ANIL
}

let pessoaQuatro: Pessoa = {
    nome: "Jenifer",
    idade: 20,
    corFavorita: CoresDoArcoIris.AMARELO
}

console.log(pessoaUm, pessoaDois, pessoaTres, pessoaQuatro)