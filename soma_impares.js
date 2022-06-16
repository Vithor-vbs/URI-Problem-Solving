let inicial = parseInt(prompt("valor inicial: "));
let final = parseInt(prompt("valor final: "));
let resultado = 0;

for (i = inicial; i < final; i++){
    if ((i % 2) != 0){
        resultado += i;
    }
}
for (i = final; i < inicial; i++){
    if ((i % 2) != 0){
        resultado += i;
    }
}
console.log(resultado);
