const prompt = require("prompt-sync")()
let a = []
let i = 0 
let b
while (i < 3){
    a[i] = prompt("entre un mot ")
    i++
}
console.log(a)
b= prompt("mot a la recherche ")

if (!(a.includes(b))){
    console.log("nom pas trouve")
}
else{
    console.log("le nom" + b+ "a ete trouver a la position "+(a.indexOf(b)+1)) 
}