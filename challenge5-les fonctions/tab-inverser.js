const prompt = require('prompt-sync')()

let tab = []
for (i = 0; i < 3; i++){
    tab[i] = Number(prompt("entre le nombre "+(i+1)+(":")))
}
function arrayreverse(table){
    return tab.reverse()
}
console.log(arrayreverse(tab))