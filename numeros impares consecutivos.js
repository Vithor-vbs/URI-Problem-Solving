
function soma (inicial,final){;
let resultado = 0;

if (final > inicial){

    for (i = inicial+1; i < final; i++){
        if ((i % 2) != 0){
            resultado += i;
        }
    }
}
else if (final < inicial){

    for (i = final+1; i < inicial; i++){
        if ((i % 2) != 0){
            resultado += i;
        }
    }
}
return resultado;
}
let inicial = parseInt(prompt("valor inicial: "));
let final = parseInt(prompt("valor final: "));

console.log(soma(inicial,final));
