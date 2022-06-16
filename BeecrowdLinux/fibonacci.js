let n = parseInt(prompt("numero: "));
let fibo = [0,1];

for (i = 2; i < n; i++){
    if (i == 2){
        let resultado = fibo[0] + fibo[1];
        fibo.push(resultado);
    }
    else {
        let soma = fibo[i - 2] + fibo[i - 1];
        fibo.push(soma);
    }
}
console.log(fibo.join(" "));
