const prompt = require("prompt-sync")()
let D = Number(prompt("entrer la distance: " ))
let V = Number(prompt("entrer la vetisse: "))
let T = D / V
console.log("le temp de trajet est: ", T+"h")
