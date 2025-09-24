const prompt = require("prompt-sync")()
let a=[]
let s=0
for(let i=0;i<10;i++){
    a[i] = Number(prompt("entre le nombre "))
    s+=a[i]
}
let m=s/10
console.log("Somme:",s)
console.log("Moyenne:",m)
