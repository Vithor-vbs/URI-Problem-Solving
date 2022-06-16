var [entrada, saida] = prompt("números").split(" ").map(Number);

if (saida > entrada){
    let contagem = saida - entrada;
    console.log(`O JOGO DUROU ${contagem} HORA(S)`);
}
else if(saida < entrada){
    let contagem = (23 - entrada) + (saida + 1);
    console.log(`O JOGO DUROU ${contagem} HORA(S)`);
}
else {
    console.log("O JOGO DUROU 24 HORA(S)");
}
