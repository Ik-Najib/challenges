const prompt = require("prompt-sync")()
let a = []
let i = 0 
let b = []
while (i < 7){
    a[i] = Number(prompt("entre un nombre "))

    b[i] = Math.sqrt(a[i]) 
    i++
}
console.log(b)