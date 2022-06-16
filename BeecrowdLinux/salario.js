var [salario] = prompt("salario inicial: ").split(" ").map(Number);

if ( salario <= 400){
    let novo_salario = Math.round(salario * 1.15);
    let reajuste = salario * (0.15);
    console.log("Novo salario:" + novo_salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 15 %");
}
else if ( salario >= 400.01 && salario <= 800){
    let novo_salario = Math.round(salario * 1.12);
    let reajuste = salario * (0.12);
    console.log("Novo salario: " + novo_salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 12 %");
}
else if ( salario >= 800.01 && salario <= 1200){
    let novo_salario = Math.round(salario * 1.10);
    let reajuste = salario * (0.10);
    console.log("Novo salario: " + novo_salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 10 %");
}
else if ( salario >= 1200.01 && salario <= 2000){
    let novo_salario = Math.round(salario * 1.07);
    let reajuste = salario * (0.07);
    console.log("Novo salario: " + novo_salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 7 %");
}
else if ( salario > 2000){
    let novo_salario = Math.round(salario * 1.04);
    let reajuste = salario * (0.04);
    console.log("Novo salario: " + novo_salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 4 %");
}

