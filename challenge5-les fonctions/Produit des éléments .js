const prompt = require('prompt-sync')()
let tab = []

function produitTableau(tab){
    for (let i =0; i <5; i++){
    tab[i] = Number(prompt("entrer un nombres: "))
}

for (let i =0; i <tab.length; i++ ){
    console.log("le table de multiplication pour"+tab[i])
    for (let m =1; m<= 10; m++){
        console.log(`${tab[i]} x ${m} = `+tab[i]*m)
    }
}
}
produitTableau(tab)