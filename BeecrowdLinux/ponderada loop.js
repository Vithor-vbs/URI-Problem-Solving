let n = parseInt(prompt("numero: "));

for (i = 0; i < n; i++){
    let [a,b,c] = prompt("notas: ").split(" ").map(Number);

    let media = ((a*2) + (b*3) + (c*5)) / 10;
    console.log(media.toFixed(1));
}