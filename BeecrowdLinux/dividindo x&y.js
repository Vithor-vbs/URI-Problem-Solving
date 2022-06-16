let pares = parseInt(prompt("parses de divisão: "));

for (i = 0; i < pares; i++){
    let [x,y] = prompt("valores: ").split(" ").map(Number);
    if (y == 0){
        console.log("divisao impossivel");
    }
    else {
    let resultado = x / y;
    console.log(resultado.toFixed(1));
    }
    
}