const prompt = require("prompt-sync")()
let n = Number(prompt("entrer n "))
let i = 2
if (n == 2){
    console.log("2")
} else {
    for (i = 3; i <=n; i+=2){
        console.log(i)
    }
}
  

