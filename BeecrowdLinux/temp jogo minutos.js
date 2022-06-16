var [hora0,min0,hora,min] = prompt("minutos e horas finais e iniciais: ").split(" ").map(Number);
let contagem_hora;
let contagem_min;

if (hora <= hora0){
    contagem_hora = 24 + (hora - hora0);
}
else {
    contagem_hora = hora - hora0;
}
//minutos 
if (min < min0){
    contagem_min = 60 + (min - min0);
}
else if(min == min0){
    contagem_hora++;
    contagem_min = 0;
}
else {
    contagem_min = min - min0;
}

console.log(`O JOGO DUROU ${contagem_hora} HORA(S) E ${contagem_min} MINUTO(S)`)