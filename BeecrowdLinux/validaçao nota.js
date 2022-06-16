let validas = [];

while (true){
    let nota = parseFloat(prompt("nota: "));

    if (nota >= 0 && nota <= 10){
        validas.push(nota);
        if (validas.length == 2){
            let resultado = (validas[0] + validas[1]) / 2;
            console.log("media = " + resultado);
            break;
        }
    }
    else{
        console.log("nota invalida");
    }
}