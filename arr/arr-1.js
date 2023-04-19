//literal
const arr = [1, 5, 10, "ola", true];
//construtora
const arr1 = new Array();
/*
princiapais metodos arr
every (ternona true todos for verdadeiro)
some (retorna true um elemento for verdadeiro)
forEach
filter (filtra elementos da arr)
map
*/
let soNumeros = arr.every( function(el){
    return typeof el === "number"
    
})

let soNumeros1 = arr.some( function(el){
  
    return typeof el === "number" && el >20
    
})

let arr2 = arr.filter(function(el, i, _arr){
       
       return typeof el === "number"
})

arr.forEach(function(el, i, _arr){
       console.log(i + "=" + el)
   
})

arr4 = arr2.map( function(el, i, arr){
          return el * el
})
console.log( "function every: " + soNumeros)
console.log( "function some: " + soNumeros1)
console.log(  "function filter: " + arr2)
console.log(  "function map: " + arr4)
