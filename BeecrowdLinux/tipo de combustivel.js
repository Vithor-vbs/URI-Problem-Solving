let alcool = 0;
let gasolina = 0;
let diesel = 0;
let num = 0;


while (num != 4){
    num = parseInt(prompt("numero: "));

    if (num == 1){
        alcool++;
    }
    else if (num == 2){
        gasolina++;
    }  
    else if (num == 3){
        diesel++;
    }

}
console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);