for (let i = 0; i < 10; i++) {
  let input = parseInt(prompt("manda o número paizão"));

  if (input <= 0) {
    console.log(`X[${i}] = 1`);
  } else {
    console.log(`X[${i}] = ${input}`);
  }
}
