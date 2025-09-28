const prompt = require("prompt-sync")()
let n = []
let somme = 0

for (i = 1; i < 4;i++){
     n[i] = Number(prompt("entrer un nombre: "))
}
for(i = 0; i < 4;i++){
    if (n[i]>0){
        somme+=n[i]
    }
}

console.log("les nombres: "+n)
console.log("le somme: "+somme)


