const prompt = require("prompt-sync")()
let n = Number(prompt("entrer un nombre: "))
if (n == 0){
    console.log("le nombre egal zero")
}
else if(n > 0){
        console.log("positif")
    }
else {
    console.log("negatif")
}
