let arr = [1,2,3,4,5,6]

arr.push(11, 13, true, "ola mundo")//adiociona elementos no ultimo

let teste = arr.unshift(4, 5, 6)//adiociona elementos no primeiro

let ultimoitem = arr.pop()// apaga o ultimo item

let primeiroitem = arr.shift()// apaga o primeiro item

let arr2 = arr.slice(2, 4)// recorta oque diver entre os indicies

let arr3 = arr.splice(2, 4, "oii")//adiciona e retira elementos
console.log(arr)

