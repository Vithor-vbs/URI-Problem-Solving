let idade = 0;
let soma = 0;
let contagem = 0;

while (idade >= 0){
    idade = parseInt(prompt("idade: "));
    if (idade <= 0){
        break;
    }
    soma += idade;
    contagem++;
}
let media = soma / (contagem);
console.log(media.toFixed(2));
