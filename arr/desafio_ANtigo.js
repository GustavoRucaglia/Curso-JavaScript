function sum(){
   const arr = []
   /*  for(let i = 0; i < arguments.length; i++){
        arr.push(arguments[i])
    }*/ 
    Array.prototype.forEach.call(function (arguments) {
        arr.push(arguments)
    })
    return numbers.reduce( function(sum, atual){
        return sum + atual
    },0)
}
sum.call(num,1,2,3,4)
sum.apply(null,[1,2,3])