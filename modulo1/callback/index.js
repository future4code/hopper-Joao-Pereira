//----------Exercícios de interpretação de código

//1.  Leia o código abaixo

        // const usuarios = [
        //     { nome: "Amanda Rangel", apelido: "Mandi" },
        //     { nome: "Laís Petra", apelido: "Laura" },
        //     { nome: "Letícia Chijo", apelido: "Chijo" }
        // ]
        
        // const novoArrayA = usuarios.map((item, index, array) => {
        //     console.log(item, index, array)
        // })

  //a) O que vai ser impresso no console?
  //Sera impresso todas as ropriedades do array, inclusive uma cópia do Array.

//2. Leia o código abaixo

        // const usuarios = [
        //     { nome: "Amanda Rangel", apelido: "Mandi" },
        //     { nome: "Laís Petra", apelido: "Laura" },
        //     { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]
        
        // const novoArrayB = usuarios.map((item, index, array) => {
        //     return item.nome
        // })
        
        // console.log(novoArrayB)

  //a) O que vai ser impresso no console?
  //Será impresso todos os nomes do array.

//3. Leia o código abaixo

        // const usuarios = [
        //     { nome: "Amanda Rangel", apelido: "Mandi" },
        //     { nome: "Laís Petra", apelido: "Laura" },
        //     { nome: "Letícia Chijo", apelido: "Chijo" },
        // ]
        
        // const novoArrayC = usuarios.filter((item, index, array) => {
        //     return item.apelido !== "Chijo"
        // })
        
        // console.log(novoArrayC)

  //a) O que vai ser impresso no console?
  //Será impresso todos os apelidos do array, menos o apelido chijo.


//----------Exercícios de escrita de código

//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os cachorros salsicha

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

console.log("//item 1A")
        const arrayNomesDoguineos = pets.map((item) => {
            return item.nome
        })

        console.log(arrayNomesDoguineos)

//-----------------------------------------------------------------------------

console.log("//item 1B")

        const arrayDogsSalsicha = pets.filter((item) => {
            return item.raca == "Salsicha"
        })

        console.log(arrayDogsSalsicha)

//------------------------------------------------------------------------------
console.log("//item 1C")

        const desconto = pets.filter((dog) => {
            return dog.raca === "Poodle"
        }).map((poodle) =>{
            newArray = []
            newArray.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome} !`)
            return newArray
        })
        console.log(desconto)
//------------------------------------------------------------------------------
//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

//-----------------------------------------------------------------

console.log("//item 2A")
const arrayNomeItem = produtos.map ((item) => {
    return item.nome
})
 console.log(arrayNomeItem)

 //-----------------------------------------------------------------
console.log("//item 2B")
const promo = produtos.map((item) => {
    const obj = {
        nome: item.nome,
        preco: (item.preco * 0.95).toFixed(2),
    }
    return obj
})
console.log(promo)

//-----------------------------------------------------------------

 console.log("//item 2C")
 const arrayBebidas = produtos.filter ((item) => {
     return item.categoria == "Bebidas"
 }) 
console.log(arrayBebidas)

//-----------------------------------------------------------------

console.log("//item 2D")
const arrayYpe = produtos.filter ((item) => {
    return item.nome.includes("Ypê")
})
console.log(arrayYpe)

//----------------------------------------------------------------
console.log("//item 2E")
const arrayfrases = arrayYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}.`
})
console.log(arrayfrases)