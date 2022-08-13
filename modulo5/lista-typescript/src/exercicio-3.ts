enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function aboutMovie( movie:string, releaseYear: number, genre: GENERO) {
    return `${movie} ${releaseYear} ${genre}`  
}

console.log(aboutMovie("Rio", 2016, GENERO.COMEDIA))