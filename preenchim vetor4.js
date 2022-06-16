let impares = [];
let pares = [];
let cont_par = 0;
let cont_impar = 0;

for (let i = 0; i < 15; i++) {
  let casos = parseInt(prompt("números: "));

  if (casos % 2 == 0) {
    pares[cont_par] = casos;
    cont_par++;

    if (cont_par == 5) {
      for (j = 0; j < 5; j++) {
        console.log(`par[${j}] = ${pares[j]}`);
      }
      cont_par = 0;
    }
  }

  if (casos % 2 != 0) {
    impares[cont_impar] = casos;
    cont_impar++;

    if (cont_impar == 5) {
      for (j = 0; j < 5; j++) {
        console.log(`impar[${j}] = ${impares[j]}`);
      }
      cont_impar = 0;
    }
  }
}
for (j = 0; j < cont_impar; j++) {
  console.log(`impar[${j}] = ${impares[j]}`);
}

for (j = 0; j < cont_par; j++) {
  console.log(`par[${j}] = ${pares[j]}`);
}
