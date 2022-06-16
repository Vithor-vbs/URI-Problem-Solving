let [a,b,c] = prompt("Números: ").split(" ").map(Number);
var num1 = 0;
var num2 = 0;
var num3 = 0;

if (a >= b && a >= c){
    num1 = a;
    if (b >= c){
        num2 = b;
        num3 = c;
    }
    else if (c > b){
        num2 = c;
        num3 = b;
    }
    
}
if (b >= a && b >= c){
    num1 = b;
    if (a >= c){
        num2 = a;
        num3 = c;
    }
    else if (c > a){
        num2 = c;
        num3 = a;
    }
    
}
if (c >= b && c >= a){
    num1 = c;
    if (b >= a){
        num2 = b;
        num3 = a;
    }
    else if (a > b){
        num2 = a;
        num3 = b;
    }
    
}

if (num1 >= (num2 + num3)){
    console.log("NAO FORMA TRIANGULO");
}
else if ((Math.pow(num1,2)) == (Math.pow(num2,2)) + (Math.pow(num3, 2))){
    console.log("TRIANGULO RETANGULO");
    if (num1 == num2 && num2 == num3){
        console.log("TRIANGULO EQUILATERO");
    }
    else if (num1 == num2 || num2 == num3 || num1 == num3){
        console.log("TRIANGULO ISOSCELES");
    }
}
else if ((Math.pow(num1,2)) > (Math.pow(num2,2)) + (Math.pow(num3, 2))){
    console.log("TRIANGULO OBTUSANGULO");
    if (num1 == num2 && num2 == num3){
        console.log("TRIANGULO EQUILATERO");
    }
    else if (num1 == num2 || num2 == num3 || num1 == num3){
        console.log("TRIANGULO ISOSCELES");
    }
}
else if ((Math.pow(num1,2)) < (Math.pow(num2,2)) + (Math.pow(num3, 2))) {
    console.log("TRIANGULO ACUTANGULO");
    if (num1 == num2 && num2 == num3){
        console.log("TRIANGULO EQUILATERO");
    }
    else if (num1 == num2 || num2 == num3 || num1 == num3){
        console.log("TRIANGULO ISOSCELES");
    }
}

