let a = parseFloat(prompt("a: "));
let b = parseFloat(prompt("b: "));
let c = parseFloat(prompt("c: "));

let delta = (b * b) - (4 * (a * c));

if (a != 0 && delta > 0) {
    delta = Math.sqrt(delta);
    let r1 = (-b + delta) / (2 * a);
    let r2 = (-b - delta) / (2 * a);
    console.log("R1 = " + r1.toFixed(5));
    console.log("R2 = " + r2.toFixed(5));
} else{
    console.log("Impossivel calcular");
    
}