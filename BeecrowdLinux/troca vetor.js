let arr = [];

for (let i = 0; i < 20; i++) {
  let num = parseFloat(prompt("números: "));
  arr.unshift(num);
}
for (let i = 0; i < arr.length; i++) {
  console.log(`N[${i}] = ${arr[i]}`);
}
