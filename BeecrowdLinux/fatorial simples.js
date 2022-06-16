let n = parseInt(prompt("numero: "));
let resultado = 1;

for (i = 1; i < n; i++){
    resultado = (n - i) * resultado;
}

console.log((Math.abs(resultado * n)));