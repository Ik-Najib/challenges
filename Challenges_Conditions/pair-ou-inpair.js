const prompt = require("prompt-sync")()
n = prompt("entrer un nombre: ")
i = n % 2
if (i == 0){
    console.log("le nombre est pair")
}
else{
    console.log("le nombre est unpair")
}

