let n = parseInt(prompt("numero: "));
let i, j, p = 1;

for(i = 1; i <= n ; i++)
{
    let valores = [];
    for (j = 1; j <= 3; j++)
    {
        valores.push(p++);
    }
    console.log(valores.join(" ") + " PUM");
    p++;
}
