function sum() {
    const numbers = Array.from(arguments)
    return numbers.reduce( function(sum, atual){
        return sum + atual
    },0)
  }
let soma = sum(1,2,3,4);

console.log(soma)

function avarage() {
    return sum(...arguments)/ arguments.length
  }
let media = avarage(1,2,3,4);
console.log(media)

function SegundoMaior(){
  const arr = Array.from(arguments)
  arr.sort((a,b) => b - a);
  if(arr.length < 2){
    return "nao existe numero menor"
  }
  for( let i = 0; i < arr.length -1; i++){
    if(arr[i] == arr[i + 1]){
      return "nao existe numero menor"
    }
  }
  return arr[1]
}

//console.log(SegundoMaior(1,2,3,4,5))

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function encontraElementosComuns(arr1, arr2) {
  return arr1.filter(elem => arr2.includes(elem));
}
function Deletaduplica(){
  const arr = Array.from(arguments)
  let arr1 = []
  arr.forEach(element => {
    if(arr1.includes(element)){

    }else{
      arr1.push(element)
    }
  });
  return arr1
}
console.log(Deletaduplica(1,2,2,3,1,3, 5, 6))