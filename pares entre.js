let pares = 0;

for (i = 0; i < 6; i++){
    let num = parseInt(prompt("digitar 6 numeros: "));
    if ((num % 2) == 0){
        pares++;
    }
}
console.log(`${pares} valores pares`);