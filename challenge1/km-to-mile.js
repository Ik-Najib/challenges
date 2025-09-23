const prompt = require("prompt-sync")()
let km = Number(prompt("entrer la distance en Km: "))
let mile = km * 1.609
console.log("la distance en mile est: ", mile)
