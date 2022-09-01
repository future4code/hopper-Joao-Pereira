type Conta = {
    nome: string;
    cpf: string;
    idade: number;
    saldo: number
}

let todosUsuarios: Conta[] = [
    {
        nome: "João Otávio",
        cpf: "444.888.888-99",
        idade: 23,
        saldo: 0
    }
]

console.table(todosUsuarios)