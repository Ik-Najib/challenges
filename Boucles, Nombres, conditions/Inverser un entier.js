const prompt =  require("prompt-sync")()

let num = prompt("entre les nombres ")
let str = num.split("").reverse().join("");

console.log(num);
console.log(str)
