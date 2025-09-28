const prompt = require("prompt-sync")()
let base = Number(prompt("entrer le base: "))
let exposant = Number(prompt("entrer l'expanent"))
let result = 1

while (exposant > 0 && base > 0){
    result *= base
console.log(result)
exposant-=1
 }



