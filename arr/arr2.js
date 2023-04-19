let arr = [4, 5, 10, 20, 35 , 4, 5]
console.log(arr.indexOf(5))// mostra o indece
console.log(arr.lastIndexOf(5)) //mostra o ultimo indice
console.log(arr.indexOf(555)) // sempre retornara -1 se nao for encontrado
console.log(arr.includes(555)) // retorna true or false caso encontrar
console.log(arr.find(function(el){
     return el > 5
}))
