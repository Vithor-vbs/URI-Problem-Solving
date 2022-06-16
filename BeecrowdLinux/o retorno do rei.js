let [runas,qtdAmizade] = prompt("runas / quantidade de amizade: ").split(" ").map(Number);

let objetos = {};

for (let i = 0; i < runas; i++ ){
    let [runa, num] = prompt("runa e valor: ").split(" ");
    num = parseInt(num);
    objetos[runa] = num;
}
let contagem_runas = parseInt(prompt("quantidade de runas recitadas por Frodo e Sam."));
let runasValidas = prompt("validas: ").split(" ");
let contagem = 0;
for (key in objetos){
    for (let n = 0; n < runasValidas.length; n++){
        if (key == runasValidas[n]){
            contagem += objetos[key];
        }
    }
}
console.log(contagem);

if (contagem >= qtdAmizade){
    console.log("You shall pass!");
}
else if (contagem < qtdAmizade){
    console.log("My precioooous");
}