let casos = parseInt(prompt("casos teste: "));
let soma = 0;
for (let i = 0; i < casos; i++) {
  let x = parseInt(prompt("numero:"));

  for (let cont = 0; cont < x; cont++) {
    if (x % cont == 0) {
      soma += cont;
    }
  }
  if (soma == x) {
    console.log(x + " eh perfeito");
  } else {
    console.log(x + " nao eh perfeito");
  }
  soma = 0;
}
