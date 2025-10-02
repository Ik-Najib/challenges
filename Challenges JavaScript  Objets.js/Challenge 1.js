const prompt= require("prompt-sync")()
let voiture = { marque: "bentley", modele: "bentayga", anne: "2020"}  

voiture.anne = "2022";
voiture.coleur = "blanche"
delete voiture.anne

console.log(voiture)