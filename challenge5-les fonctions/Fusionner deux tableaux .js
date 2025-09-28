const prompt = require('prompt-sync')()
let tab = []
let tab1 = []
let tab2 = []
function fusionner(tab){
for (let i = 0; i<3; i++){
        tab[i] = Number(prompt("entre un nombre pour tab 1:  "))
} 
for (let i = 0; i<3; i++) {
        tab1[i] = Number(prompt("entrer un nombre pour tab 2:  "))
}
        tab2 = tab.concat(tab1)
    
    console.log(tab2)
}
fusionner(tab)