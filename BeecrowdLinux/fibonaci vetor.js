let casos = parseInt(prompt("casos teste: "));
let fibo = [0, 1];

for (i = 2; i <= 60; i++) {
  if (i == 2) {
    let resultado = fibo[0] + fibo[1];
    fibo.push(resultado);
  } else {
    let soma = fibo[i - 2] + fibo[i - 1];
    fibo.push(soma);
  }
}

for (let i = 0; i < casos; i++) {
  let pos = parseInt(prompt("número: "));

  console.log(`Fib(${pos}) = ${fibo[pos]}`);
}
