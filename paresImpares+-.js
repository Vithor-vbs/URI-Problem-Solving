let pares = 0, impares = 0, positivos = 0, negativos = 0;

for (i = 0; i < 5; i++){
    let num = parseInt(prompt("numeros: "));
    
    if (num > 0){
        positivos++;
        if ((num % 2) == 0){
            pares++;
        }
        else if ((num % 2) != 0){
            impares++;
        }
    }
    else if (num < 0){
        negativos++;
        if ((num % 2) == 0){
            pares++;
        }
        else if ((num % 2) != 0){
            impares++;
        }
    }
}
console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);