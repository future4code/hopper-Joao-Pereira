function sayHello(name: string, birthDate: string): string {
    return `Olá me chamo ${name}, nasci no dia ${birthDate.split("/",1)} do mês ${birthDate.slice(3, -5)} do ano ${birthDate.slice(-4)}`
}

console.log(sayHello("João", "05/04/1999"))