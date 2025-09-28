const prompt = require("prompt-sync")()
let anne = Number(prompt("entrer l'annee: "))
if(anne % 4 == 0 && anne % 100 !== 0 || anne % 400 == 0) {
    console.log("bissextile")
} else {
console.log(" bisextile")
}


    
