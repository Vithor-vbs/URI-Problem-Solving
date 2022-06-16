

let positivos = [];
for (i  = 0; i < 6; i++){
    let num = parseInt(prompt("digitar 6 numeros: "));
    if (num > 0){
        positivos.push(num);
    }
}
console.log(`${positivos.length} valores positivos`);

