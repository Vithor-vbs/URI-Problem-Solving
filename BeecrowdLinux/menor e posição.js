let n = parseInt(prompt("numero de casos"));
let arr = [];

for (let i = 0; i < n; i++) {
  let elementos = parseInt(prompt("numero"));
  arr.push(elementos);
}
let menorValor = Math.min.apply(null, arr);
console.log("Menor valor: " + menorValor);

for (i = 0; i < arr.length; i++) {
  if (menorValor == arr[i]) {
    let menorPosicao = i;
    console.log("Posicao: " + menorPosicao);
  }
}
