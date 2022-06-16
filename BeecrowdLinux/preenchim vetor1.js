let index = parseInt(prompt("manda o número barão"));
let result = [index];

for (let i = 1; i < 10; i++) {
  result[i] = result[i - 1] * 2;
}
for (i = 0; i < 10; i++) {
  console.log(`N[${i}] = ${result[i]}`);
}
