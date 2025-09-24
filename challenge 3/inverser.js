const prompt =  require("prompt-sync")()
let num = [];
let i = 0
do{
    num[i] = Number(prompt("entre les nombres "))
    i++;
}while(i < 5)

console.log(num);
num.reverse();
console.log(num);