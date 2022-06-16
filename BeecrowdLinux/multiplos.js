var [x,y] = prompt("números: ").split(" ").map(Number);

var k2 = y / x;
var k = x / y;
if (Number.isInteger(k)){
    console.log("Sao Multiplos");
}
else if (Number.isInteger(k2)){
    console.log("Sao Multiplos");
}
else{
    console.log("Nao sao Multiplos");
}
