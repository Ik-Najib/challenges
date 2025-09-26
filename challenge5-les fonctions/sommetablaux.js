const prompt = require("prompt-sync")()

let tab = []

for(let i = 0 ; i < 5 ; i++){
   tab[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}

function sommeTableau(Tableau){
    let somme = 0
    for(let i = 0 ; i < Tableau.length ; i++){
        somme = somme + Tableau[i]
    }
    return somme
}

console.log(sommeTableau(tab));
