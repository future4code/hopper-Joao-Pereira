// Observe a função a seguir, escrita em JavaScript:
// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}




// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }