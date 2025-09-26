const prompt = require("prompt-sync")()
let a
let b
let history = []
let result
let test = true

function addition(a,b){
    a = Number(prompt("enter A :"))
    b = Number(prompt("enter B :"))
    result = a + b
    console.log(`${a} + ${b} = `, result)
    history.push(result)
    return
}
function subtraction(a,b){
    a = Number(prompt("enter A :"))
    b = Number(prompt("enter B :"))
    result = a - b
    console.log(`${a} - ${b} = `, result)
    history.push(result)
    return
}
function division(a,b){
    a = Number(prompt("enter A :"))
    b = Number(prompt("enter B :"))
    result = a / b
    console.log(`${a} / ${b} = `, result)
    history.push(result)
    return
}
function multiplication(a,b){
    a = Number(prompt("enter A :"))
    b = Number(prompt("enter B :"))
    result = a*b
    console.log(`${a} x ${b} = `, result)
    history.push(result)
    return
}

function puissance(a,b){
    a = Number(prompt("enter A :"))
    b = Number(prompt("enter B :"))
    result = Math.pow(a,b)
    console.log(`${a} ^ ${b} = `, result)
    history.push(result)
    return
}

function sqred(a){
    a = Number(prompt("enter A :"))
    result = Math.sqrt(a)
    console.log(`${a}=`, result)
    history.push(result)
    return
}
function facto(a){
    a = Number(prompt("enter A :"))
    for (i = a; i>0; i--){
        if (a < 0){
            console.log("La factorielle n'est pas définie pour les entiers négatifs ")
        }
        else {
        result = a *i
        console.log(`${a} = `,result)
        history.push(result)
        }
    }
return 
}
while (test){
    console.log("(choose an operation) \n1 = addition \n2 = subtraction  \n3 = multiplication \n4 = division \n5 = la puissance \n6 = the square root \n7 = la factorielle \n8 = history \n9 = quit n\....")
    let operation = Number(prompt(": " ))
    if(operation !== 9){
    switch(operation){
        case 1:
            addition(a,b)
            break;
        case 2:
            subtraction(a,b)
            break;
        case 3:
            multiplication(a,b)
            break;
        case 4:
            division(a,b)
            break;
        case 5:
            puissance(a,b)
            break;
        case 6:
            sqred(a)
            break;
        case 7:
            facto(a)
            break;
        case 8:
            console.log(history) 
            break;
        default:
            console.log("votre choix est invalide")
    }
   } else {
   test = false
      console.log("merci pour votre visit")
    }
}


