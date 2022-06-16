let validas = [];

while (true){
    let nota = parseFloat(prompt("nota: "));

    if (nota >= 0 && nota <= 10){
        validas.push(nota);
        if (validas.length == 2){
            let resultado = (validas[0] + validas[1]) / 2;
            console.log("media = " + resultado.toFixed(2));
            
            do {
                repetição = parseInt(prompt("1-sim, 2-nao"));
                console.log("novo calculo (1-sim 2-nao)");
            } while (repetição != 1 && repetição != 2)

            if (repetição == 1){
                validas.pop();                
                validas.pop();                
                continue;
            }
            else if (repetição == 2){
                break;
            }
        }
    }
    else{
        console.log("nota invalida");
    }
}