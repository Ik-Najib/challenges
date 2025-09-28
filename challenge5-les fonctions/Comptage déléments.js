const prompt = require("prompt-sync")()
let tab = []
let count = 0

function occurance(tab){
    for(let i= 0; i<5;i++){
    tab[i] = Number(prompt("entre un n "))
    }
    let valeur = Number(prompt("entre la valeur n "))

    for (let i= 0; i<5; i++){
        if (tab[i] == valeur ){
            count++
        }
    }
    console.log((count))
   
}
occurance(tab)