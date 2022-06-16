let [a, b, c, d] = prompt("notas: ").split(" ").map(Number);

let media = parseFloat(((2*a) + (3*b) + (4*c) + d) / 10);
console.log("Media: " + media.toFixed(1));

if (media >= 7.0){
    console.log("Aluno aprovado.");
}
else if (media < 5.0){
    console.log("Aluno reprovado.");
}
else {
    console.log("Aluno em exame.");
    let exame = parseFloat(prompt("exame: "));
    console.log("Nota do exame: " + exame.toFixed(1));
    let notaFinal = (media + exame) / 2;
   
    if (notaFinal >= 5.0){
        console.log("Aluno aprovado.");
    }
    else {
        console.log("Aluno reprovado.");
    }

    console.log("Media final: " + notaFinal.toFixed(1));
}