const prompt = require("prompt-sync")()
let a = Number(prompt("entrer la note: "))
let g
switch(true){
    case a >= 90 && a <= 100:
        console.log("A")
    //break;
    case a >= 80 && a < 90:
        console.log("B")
        break;
    case a >= 70 && a < 80:
        console.log("c")
        break;
    case a >=60 && a < 70:
        console.log("d")
        break;
    case a < 60:
        console.log("F")
        break;
}