const prompt = require("prompt-sync")()
let livres = [
    {titre:  "the sepien", author:"yoval noah hararry", anne: "2011",},
    {titre: "les mesirables", author: "victor hugo", anne: "2023",},
    {titre: "le petit prince", author: "Najib", anne:"2001",},
   trouverLivres = function(nom){
return livres.find(livres=> livres.titre.toLowerCase() === nom.toLowerCase())
    }
]
 
for (i = 0; i< livres.length; i++){
    console.log(livres[i].titre);
}
let nom = prompt("entrer le nom de le livre:  ")
console.log(trouverLivres(nom))