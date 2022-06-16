let casos = parseInt(prompt("casos teste: "));

for (i = 0; i < casos; i++) {
  let num = parseInt(prompt("numero: "));

  // verificar se e primo
  if (num == 1) {
    console.log("1 nao eh primo");
  }
  let isprimo = true;
  for (n = 2; n < num; n++) {
    if (num % n == 0) {
      isprimo = false;
      break;
    }
  }
  if (isprimo == true) {
    console.log(num + " eh primo");
  } else if (isprimo == false) {
    console.log(num + " nao eh primo");
  }
}
