
let cordado = prompt("tipo de cordado: ");
let categoria = prompt("grupo zoológico: ");
let grupo = prompt("grupo: ");

if (cordado == 'vertebrado'){
    if (categoria == 'ave'){
        if (grupo == 'onivoro'){
        console.log("pomba");
        }
        else if (grupo == 'carnivoro'){
            console.log("aguia");
        }
    }
    else if (categoria == 'mamifero'){
        if (grupo == 'onivoro'){
            console.log("homem");
        }
        else if (grupo == 'herbivoro'){
            console.log("vaca");
        }
    }
}
else if (cordado == 'invertebrado'){
    if (categoria == 'inseto'){
        if (grupo == 'hematofago'){
            console.log("pulga");
        }
        else if (grupo == 'herbivoro'){
            console.log("lagarta");
        }
    }
    else if (categoria == 'anelideo'){
        if (grupo == 'hematofago'){
            console.log('sanguessuga');
        }
        else if (grupo == 'onivoro'){
            console.log('minhoca');
        }
    }
}