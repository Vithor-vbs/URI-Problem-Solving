let n =parseInt(prompt("linhas: "));
let dentro = 0, fora = 0;
for (i = 0; i < n; i++){
    let x = parseInt(prompt("numero: "));

    if (x >= 10 && x <= 20){
        dentro++;
    }
    else {
        fora ++;
    }
}
console.log(dentro + " in");
console.log(fora + " out");