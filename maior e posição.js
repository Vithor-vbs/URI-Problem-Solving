let arr = [];
for (i = 0; i < 100; i++){
    let valor = parseInt(prompt("100 valores"));
    arr.push(valor);
}

let resultado = Math.max.apply(null, arr)
console.log(resultado);
console.log(arr.indexOf(resultado) + 1);