
while(true){
    let [a,b] = prompt("numeros: ").split(" ").map(Number);
    if (a < b){
        console.log("Crescente");;
    }
    else if (a > b){
        console.log("Decrescente");
    }
    else {
        break;
    }
}
