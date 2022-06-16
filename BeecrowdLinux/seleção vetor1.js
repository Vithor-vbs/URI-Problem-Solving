for (let i = 0; i < 100; i++) {
  let num = parseFloat(prompt("números: "));
  if (num <= 10) {
    console.log(`A[${i}] = ${num.toFixed(1)}`);
  }
}
