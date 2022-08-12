const a: number = 5
const b: number = 5
const c: number = 6

function checaTriangulo(a:number, b:number, c:number): string{
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(a, b, c))