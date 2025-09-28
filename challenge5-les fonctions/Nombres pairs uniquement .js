const prompt = require('prompt-sync')()
let tab = []
function filtrerPairs(tab){
    for (let i = 0; i<5; i++){
        tab[i] = Number(prompt("entre un nombre "))
    }
    for (let i =0; i < tab.length; i++){
        if (tab[i] % 2 == 0){
        console.log(tab[i]) 
        }
   }
}
filtrerPairs(tab)