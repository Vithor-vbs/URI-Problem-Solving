
while (true){
let [x,y] = prompt("valores x & y: ").split(" ").map(Number);
    if (x > 0 && y > 0){
        console.log("primeiro");
    }
    else if (x < 0 && y > 0){
        console.log("segundo");
    }
    else if(x < 0 && y < 0){
        console.log("terceiro");
    }
    else if (x > 0 && y < 0){
        console.log("quarto");
    }
    else {
        break;
    }

}

