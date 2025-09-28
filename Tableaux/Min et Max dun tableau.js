const prompt = require("prompt-sync")()
let a = []
let i = 0 
let b
while (i < 7){
    a[i] = Number(prompt("entre un nombre "))
    i++
}
console.log("max: ",Math.max(...a))
console.log("min: "+Math.min(...a))