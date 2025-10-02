const prompt = require("prompt-sync")()

function etudiant(nom,age,hobby){
    this.nom = nom
    this.age = age
    this.hobbys = hobby
    this.sePresenter = function() {
       console.log(`Bonjour, je m'appelle ${nom} et j’ai ${age} ans and i like playing ${hobby}.`) 
    }
} 
let e1 = new etudiant("najib",24,"football")