const prompt=require("prompt-sync")()
let cel = Number(prompt("Enter temperature in Celsius: "))
f = (cel * 1.8) + 33
console.log(f)

