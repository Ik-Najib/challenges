const prompt = require("prompt-sync")()
let N = Number(prompt("entre un nombre: "))
let count = 0
let somme = 0

for (let i = 0; i < N; i += 10){
    console.log(i)
   somme += i
   count = Math.max(i)
}
console.log("max ",Math.max(count))
console.log("somme ",somme)
