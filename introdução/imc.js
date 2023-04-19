function CalcularImc(peso,tamanho,cb){
 imc = peso/(tamanho*tamanho)
    console.log(imc)
    cb(imc)
}
CalcularImc(60,1.65,ClassificaImc)
function ClassificaImc(){
    if(imc>16 && imc<=19){
        console.log("abaixo do peso")
    }
    else if(imc>19 && imc<=23){
        console.log("ideal")
    }
    else if(imc>23 && imc<=25){
        console.log("um pouco acima")
    }
    else if(imc>25 && imc<=30){
        console.log("acima do peso")
    }
    else if(imc>30){
        console.log("obeso")
    }
    else(
        console.error("indefinido")
    )
}