let [saida, tempoViagem, fuso] = prompt(
  "hora de saida/ tempo de viagem/ fuso horario: "
)
  .split(" ")
  .map(Number);
let resultado = saida + tempoViagem + fuso;

if (resultado >= 24) {
  console.log(resultado - 24);
} else if (resultado < 0) {
  console.log(resultado + 24);
} else {
  console.log(resultado);
}
