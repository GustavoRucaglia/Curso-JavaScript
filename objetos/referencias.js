let x = 10
let x1 = [10]
let y = {n: 10}

function mudaX(n){

   if(typeof n === "number"){
    n++
    console.log("x interno", n)
   }else{
    n.push(11)
    console.log("x1 interno", n)
   }
}

function mudaY(obj){
    obj.n++
}

mudaX(x)
mudaX(x1)
mudaY(y)
console.log("x externo", x)
console.log("x1 externo", x1)
console.log("y externo", y)