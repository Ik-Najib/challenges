const prompt = require("prompt-sync")()
let pass = prompt("entre password  ")
let havespecialchar = false 
let specials = /[!@#$%^&*()_+=]/
let passlength = pass.length
if (specials.test(pass)){
    havespecialchar = true
}
if(passlength >= 8 && havespecialchar){
    console.log("fort")
}
else if(passlength >= 6){
    console.log("moyene")
}
else{
console.log("faible")
}


