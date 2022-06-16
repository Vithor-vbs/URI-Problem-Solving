let [casos, sorteio] = prompt("manda ai").split(" ").map(Number);
let alunos = [];

for (let i = 0; i < casos; i++) {
  let estudante = prompt("nome do aluno:");
  alunos[i] = estudante;
}

let result = alunos.sort();

let resp = result[sorteio - 1];
console.log(resp);
