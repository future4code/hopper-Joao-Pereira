
ˋˋˋ
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ];
    
    const nomes = animais.map(animais => animais.nome)
    console.log(nomes)
}
criarArrayNomesAnimais()
   
ˋˋˋ

<!-- Não entendi pq no nav está rodando como esperado, e no site não (¬_¬) -->