let [a,b,c] = prompt("Números: ").split(" ").map(Number);
var op1 = (b - c);
var op2 = (a - c);
var op3 = (a - b);
//simulação de módulo
if (op1 < 0){
    op1 * (-1);
}
if (op2 < 0){
    op2 * (-1);
}
if (op3 < 0){
    op3 * (-1);
}

// condição de existência do triângulo 
if (op1 < a < (b + c) && op2 < b < (a + c) && op3 < c < (a + b)){
    console.log("Perimetro = " + (a + b + c).toFixed(1));
}
else {
    let area = ((a + b) * c / 2);
    console.log("Area = " + area.toFixed(1));
}