let num = parseInt(prompt("repetição: "));
let arr = [];

for (i = 0; i < 1000; i++) {
  arr.push(i % num);
}

for (let i = 0; i < arr.length; i++) {
  console.log(`N[${i}] = ${arr[i]}`);
}
