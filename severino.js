let num = prompt("numero de casos: ");
while (num != "") {
  let livros = [];

  for (let i = 0; i < num; i++) {
    livros[i] = prompt("Número: ");
  }

  livros.sort();

  for (i = 0; i < num; i++) {
    console.log(livros[i]);
  }

  num = prompt("Novamente?");
}
