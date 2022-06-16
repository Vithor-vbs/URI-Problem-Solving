while (true){
    let senha = parseInt(prompt("senha: "));

    if (senha == 2002){
        console.log("Acesso Permitido");
        break;
    }
    else {
        console.log("Senha Invalida");
    }
}