let resultado = 0;
let positivos = 0;
for (i  = 0; i < 6; i++){
    let num = parseFloat(prompt("digitar 6 numeros: "));
    if (num > 0){
        positivos++;
        resultado += num;
    }
}
console.log(`${positivos} valores positivos`);

let media = resultado / positivos;
console.log(media.toFixed(1));
