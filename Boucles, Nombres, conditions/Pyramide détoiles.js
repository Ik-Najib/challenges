const prompt = require("prompt-sync")()
let n = Number(prompt("entrer un nombre: "))


function numpr(n)
{
      if (n==2){ 
        console.log("2")
    }else if (n<=1){
        console.log("essayer d'entrer un nombre positive et <1")
    }else if (n>2) {
        
        console.log(" ".repeat(n--)+"*".repeat(2))
        for (i = 3; i <=n; i+=2)

        console.log(" ".repeat(n--)+"*".repeat(i))

}
}
numpr(n)
    