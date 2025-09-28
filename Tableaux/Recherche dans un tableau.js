const prompt = require("prompt-sync")()
let a = []
let i = 0 
let b
while (i < 8){
    a[i] = Number(prompt("entre un nombre "))
    i++
}
console.log(a)
b= Number(prompt("nombre a la recherche "))

if (!(a.includes(b))){
    console.log("nom pas trouve")
}
else{
    console.log("le nombre" + b+ "a ete trouver a la position "+(a.indexOf(b+1))) 
}