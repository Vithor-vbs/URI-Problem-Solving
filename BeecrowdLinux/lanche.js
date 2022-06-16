let [codigo, qtd] = prompt("número").split(" ").map(Number);

const valores = [4.00, 4.50, 5.00, 2.00, 1.50];
var pagar = valores[codigo - 1];

pagar = pagar * qtd;

console.log("Total: R$ " + (pagar).toFixed(2));
