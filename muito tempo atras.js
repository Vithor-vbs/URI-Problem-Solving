let casos = parseInt(prompt("numero de casos:"));

for (let i = 0; i < casos; i++) {
  let n = parseInt(prompt("numero: "));

  ano = n - 2015;
  if (ano > 0) {
    console.log(ano + " A.C.");
  } else if (ano < 0) {
    ano = ano * -1;
    console.log(ano + " D.C.");
  } else {
    console.log("1 D.C.");
  }
}
