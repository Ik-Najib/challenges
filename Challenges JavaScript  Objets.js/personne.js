const prompt = require("prompt-sync")()

let person = {
    nom : "najib",
   age : 24,
   hobby :  "tennis",
}

let i
for(i in person){
    console.log(person[i])
}


