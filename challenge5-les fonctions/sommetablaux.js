const prompt = require('prompt-sync')()

let tab = []

for (let i = 0; i< 3; i++){
    tab[i]= Number(prompt("entre un nobmre "))

}
function sumtab(tab){
    let sum = 0
    for (let i = 0 ;i < tab.length; i++){
        sum = sum + tab[i]
    }
    return sum
}
console.log("le somme est: "+ sumtab(tab))
