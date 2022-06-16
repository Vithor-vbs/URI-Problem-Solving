let n = parseInt(prompt("indivíduos: "));
let total = 0;

let C = 0, R = 0, S = 0;
for (let i = 0; i < n; i++){
    let individuo = prompt("fala ai: ");

    let num_str = parseInt(individuo);
    total += num_str;
    
    if (individuo.substr(-1) == "C"){
        let temp = parseInt(individuo);
        C = C + temp;
    }
    else if (individuo.substr(-1) == "R"){
        let temp = parseInt(individuo);
        R = R + temp;
    }
    else if (individuo.substr(-1) == "S"){
        let temp = parseInt(individuo);
        S = S + temp;
    }

}
console.log("Total: " + total + " cobaias");
console.log("Total de coelhos: " + C);
console.log("Total de ratos: " + R);
console.log("Total de sapos: " + S);

let percentual_C = (C / total) * 100;
let percentual_R = (R / total) * 100;
let percentual_S = (S / total) * 100;

console.log("Percentual de coelhos: " + percentual_C.toFixed(2) + " %");
console.log("Percentual de ratos: " + percentual_R.toFixed(2) + " %");
console.log("Percentual de sapos: " + percentual_S.toFixed(2) + " %");
