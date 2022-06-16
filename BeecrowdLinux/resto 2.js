let n = parseInt(prompt("numero: "));

for (i = 1; i <= 10000; i++){
    if ((i % n) == 2){
        console.log(i);
    }
}