const prompt = require('prompt-sync')()
let tab = []


 function maxTableau(tab){
    for (let i = 0; i< 5; i++){
    tab[i]= Number(prompt("entre un nobmre "))
 }
 let  max = Math.max(...tab)
 console.log("le max est: "+max)
 return
}

maxTableau(tab)