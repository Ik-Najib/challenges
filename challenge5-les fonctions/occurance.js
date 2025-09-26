const prompt = require("prompt-sync")()
let tab = []
for(let i= 0; i<5;i++){
    tab[i] = Number(prompt("entre un n "))
}
function occurance(tab,valeur){
    let count = 0
    valeur = Number(prompt("entre un autre n"))
    for (let i= 0; i<5;i++){
        if (tab[i] == valeur ){
            count++
        }
    }
    return count
}
console.log(occurance(tab))