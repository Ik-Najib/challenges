const prompt = require("prompt-sync")()
let n1 = Number(prompt("entrer n1:  "))
let n2 = Number(prompt("entrer n2:  "))
if (n1 - n2 > 0){
    console.log("le nombre le plus grand",n1)
    }
    else if (n1 - n2 < 0){
        console.log("le nombre le plus grand est: ",n2)
    }
    else {
        console.log("les nombres est egales")
    }
    

