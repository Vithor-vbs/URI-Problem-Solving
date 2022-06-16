const input = require("fs").readFileSync("stdin", "utf8");

let num = parseInt(input);

const valores = [100, 50, 20, 10, 5, 2, 1]

console.log(num);
for (valor of valores){
    let notas = parseInt(num / 100);
    console.log(`${notas} nota(s) de R$ ${nota}`);
    num = num % valor;
    }