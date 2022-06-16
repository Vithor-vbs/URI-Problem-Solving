let contGremio = 0;
let contInter = 0;
let contEmpate = 0;
let grenais = 1;

while (true){

    let [inter,gremio] = prompt("inter X gremio: ").split(" ").map(Number);
    if (gremio > inter){
        contGremio++;
    }
    else if (gremio < inter){
        contInter++;
    }
    else {
        contEmpate++;
    }

    //outro grenal
    do {
        repetição = parseInt(prompt("1-sim, 2-nao"));
        console.log("Novo grenal (1-sim 2-nao)");

    } while (repetição != 1 && repetição != 2)

    if (repetição == 1){
        grenais++;
        continue;
    }
    else if (repetição == 2){
        break;
    }
}
console.log(grenais + " grenais");
console.log("Inter:" + contInter);
console.log("Gremio:" + contGremio);
console.log("Empates:" + contEmpate);
if (contGremio > contInter){
    console.log("Gremio venceu mais");
}
else if (contInter > contGremio){
    console.log("Inter venceu mais");
}
else {
    console.log("Nao houve vencedor");
}