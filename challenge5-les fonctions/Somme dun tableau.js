const prompt = require("prompt-sync")()
let tab = []
let somme = 0
function sommeTableau(tab){
for (let i = 0; i < 5; i++){
tab[i] = Number(prompt("entre nombre "))
somme+=tab[i]
}
    console.log(somme)
}
sommeTableau(tab)
