const prompt = require("prompt-sync")()
let arr = []
let maxN = 0
let i = 0
for (let i = 0; i < 4; i++){
arr[i] = Number(prompt("entre nombre "))
}

function maxval(m){
    if (maxN < m[i+1] ){
        maxN = m[i+1]
    }
    console.log(maxN)
}

maxval(arr)
