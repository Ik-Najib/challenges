const prompt = require('prompt-sync')()
let tab = []
let somme = 0
function moyenne(tab){
    for (let i = 0; i<5; i++){
        tab[i] = Number(prompt("entre un nombre "))
        somme+=tab[i]
    }
    console.log("la moyen est: "+somme/tab.length)
}
moyenne(tab)