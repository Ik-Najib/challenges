const prompt = require("prompt-sync")()

let Nom = prompt("entrer le Nom d'utilisateur: ").toLowerCase()
let password = prompt("entrer le mot de pass: ")
if(Nom == "admin" && password == "12345"){
    console.log("bienvenue "+Nom)
}else if (Nom == "admin" && password !== "12345"){
    console.log("mot de pass incorrect ")

}else {
console.log("utilisateur introuvable")
}
