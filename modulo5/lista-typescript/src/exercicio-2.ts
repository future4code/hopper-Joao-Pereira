type DataType = string | number | boolean

function toPrintType(data: DataType): DataType{
    return typeof data
}

console.log(toPrintType(true))
console.log(toPrintType("João"))
console.log(toPrintType(100))