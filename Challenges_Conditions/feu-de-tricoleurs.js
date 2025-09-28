const prompt = require("prompt-sync")()
let coleur = "";
let quit = true 

while(quit) {
if (coleur !== "q") {
 coleur = prompt("entrer un coleur: ")
 switch(coleur){
case "rouge":
    console.log("arret")
    break;
case "jaune":
    console.log("Préparez-vous")
    break;
case "vert":
     console.log("allez")
     break;
case "q":
    
 }
}else {
    quit = false 
    console.log("quit")
}
 
}