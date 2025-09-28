const prompt = require("prompt-sync")()
let A = Number(prompt("entrer A: "))
let B = Number(prompt("entrer B: "))
let C = Number(prompt("entrer C: "))
let D = Number(prompt("entrer D: "))
let sum,avg
sum =  A + B + C + D
avg = sum / 4
console.log("le somme:", sum)
console.log("le moyene:", avg)

