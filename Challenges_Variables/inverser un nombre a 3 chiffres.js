const prompt = require("prompt-sync")()

let input = prompt("Entrez un nombre à 3 chiffres: ")
let reversednum = input.split('').reverse().join('')

console.log(reversednum)