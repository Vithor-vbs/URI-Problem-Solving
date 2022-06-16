let x = parseInt(prompt("numero 1: "));
let y = parseInt(prompt("numero 2: "));

if (x > y){
    a = y;
    b = x;
}
if (x <= y){
    a = x;
    b = y;
}
a++;
while (a < b){
    if (a % 5 == 2 || a % 5 == 3){
        console.log(a)
    }
    a++;
}