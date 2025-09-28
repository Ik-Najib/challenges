const prompt = require('prompt-sync')()

let tab = []

function inverserTableau(tab){
    for (i = 0; i < 3; i++){
    tab[i] = Number(prompt("entre le nombre "+(i+1)+(":")))
}
    console.log(tab.reverse(""))
return
}
inverserTableau(tab)