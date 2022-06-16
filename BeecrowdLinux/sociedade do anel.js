let n = parseInt(prompt("indivíduos: "));

let A = 0, E = 0, H = 0, M = 0, X = 0;
for (let i = 0; i < n; i++){
    let individuo = prompt("fala ai: ");
    if (individuo.substr(-1) == "A"){
        A++;
    }
    else if (individuo.substr(-1) == "E"){
        E++;
    }
    else if (individuo.substr(-1) == "H"){
        H++;
    }
    else if (individuo.substr(-1) == "M"){
        M++;
    }
    else if (individuo.substr(-1) == "X"){
        X++;
    }

}
console.log(X + " Hobbit(s)");
console.log(H + " Humano(s)");
console.log(E + " Elfo(s)");
console.log(A + " Anao(s)");
console.log(M + " Mago(s)");




