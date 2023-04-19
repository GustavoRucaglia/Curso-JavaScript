const arr = new Array(5, "oi", new Array(4,3,2)) // declarar arraw da forma formal
let a = 0 // usar uma variavel na arraw
arr[3] = "cachorro" // adicionar elemento na arraw
arr[arr.length] = 9 // colocar como ultima coisa na arwaw
arr.push("push", 4 ) // metedo para adicionar arraw
//console.log(arr[arr.length-1]) //exibir a ultima coisa na arrew
//console.log(arr[arr.length-arr.length]) // exibir primeiro elemnto da arraw
for(let i = 0; i < arr.length; i++){ // interrar arraws
    //console.log( `${i} = ${arr[i]} `)
}

const pessoa = new Object() // criando objetos de forma formal
pessoa.nome = "gustavo" // adicionando dados no objeto
pessoa.idade = 16
const test = "idade"
//console.log(pessoa[test])

const pao = { // criando obejetos de forma literal
  feitoCom : "farinha",
   qnts: 3,
   comprar : function(n){
    if( n > this){
      return "quantidade indisponivel"
    }
    this.qnts -= n
   }
 }
// pao.comprar(5)
// console.log(pao.qnts)
  //   for(let prop in pao){ // interar objetos
     // console.log(prop)
      //console.log(pao[prop])
//     }                           
//console.log(pao)
const pessoa1 = {
  nome : 'Gustavo' ,
  idade : 16 ,
  homem : true
  
}
const pessoa2 = {
  nome : 'Helo' ,
  idade : 15 ,
  homem : false
  
}
const pessoa3 = {
  nome : 'yasmim' ,
  idade : 13 ,
  homem : false
  
}
const pessoas = [ pessoa1, pessoa2, pessoa3] 
for(i = 0; i < pessoas.length; i++){
  console.log(pessoas[i].homem)
}