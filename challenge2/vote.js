const prompt = require("prompt-sync")()
let age = Number(prompt("votre age"))
if (age >= 18){
    console.log("eligible")
    
}
else{
    console.log("non eligible")
}
