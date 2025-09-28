const prompt = require("prompt-sync")()
let  nombre = Number(prompt("entrer un nombre: "))
if (nombre % 3 == 0 && nombre % 5 == 0){
     console.log("FizzBuzz")
    
} else if (nombre % 5 == 0){
    console.lgo("Buzz")

}
else if (nombre % 3 == 0)
console.log("Fizz")
else{
    console.log(nombre)
}