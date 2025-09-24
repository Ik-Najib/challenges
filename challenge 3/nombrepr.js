const prompt = require("prompt-sync")()
let N = prompt("entre un nombre: ")
if (N % 2 == 0){
    console.log("not prime")
} else{
    console.log(" prime")
}
