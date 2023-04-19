const arr = [1,2,3]

const [n1] = arr
const [ , ...n2] = arr

const arr1 = [1, 2, 3]
const obj = {
    nome: "maria",
    idade: "12",
    email: "mari@"
}

for( let prop in obj){
    console.log(prop + ": " + obj[prop]) 

}
for(let prop of arr){
    console.log(prop)
}
