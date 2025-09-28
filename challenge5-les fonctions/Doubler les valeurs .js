const prompt = require('prompt-sync')()
let tab = []
let double = []
function doubler(tab){
for (let i = 0; i<5; i++){
        tab[i] = Number(prompt("entre un nombre "))
        double[i] = tab[i] * 2
    }

    console.log(double)
}
doubler(tab)