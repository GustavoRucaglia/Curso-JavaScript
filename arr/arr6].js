let arr = [1, 2, 3]
//console.log(arr.reverse())

let soma = arr.reduce( function(acumulador, atual, i, _arr ){
return acumulador + atual
}, 0)

const nomes = ["daniel", "Maria", "Joana", "Joao"]
let nomesOrdem = nomes.reduce(function(nomes, nomeAtual){
   let PrimeiraLetra = nomeAtual[2]
   if(nomes[PrimeiraLetra]){
      nomes[PrimeiraLetra]++
   }else{
    nomes[PrimeiraLetra] = 1
   }
   return nomes
}, {} )

//console.log(nomesOrdem)

const numbers = [-10, 0, 2, 4]
let DobroPosi = numbers.reduce( (dobro, atual) => {
      if(atual >= 0){
        dobro.push(atual*2)
      }
      return dobro
}, [])
//console.log(DobroPosi)
const numeros = [1, 3, 4, 1, 4, 5, 3, 8, 9]
let numerosUnicos = numeros.reduce( (arrNum, numAtual) => {
    if(arrNum.indexOf(numAtual) < 0){
        arrNum.push(numAtual)
    } else{
       
    }
    return arrNum
}, [])

console.log(numerosUnicos)
