let [inicial_x, inicial_y] = prompt("x final e inicial").split(" ").map(Number);
let [final_x, final_y] = prompt("y final e inicial").split(" ").map(Number);

let op1 = Math.pow((final_x - inicial_x), 2);
let op2 = Math.pow((final_y - inicial_y), 2);

let resultado = Math.sqrt(op1 + op2);

console.log(resultado.toFixed(4));
