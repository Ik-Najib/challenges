const prompt = require("prompt-sync")()
let list = []
let test = true


function addTask(){
let title = prompt("enter task's title: ")
let description = prompt("enter task's descreption :")
let etat = true
if (description && title){
    let task = {
        id: list.length+1,
        description: description,
        title: title,
        etat: true,
    }
    list.push(task)
    console.log(task)
    console.log("a new task was added succefully. ")
}else{
    console.log("adding new task failed, try again ")
}
}
function showTasks(){
console.log(list)
}
function search(){
    let x = prompt("enter the title of the task: ");
   let found = list.find(task=> task.title.toLowerCase()=== x.toLowerCase() || task.id === x)
   if (found){
    console.log("task found", found)
    return found}
    else{
       console.log("the task wasn't found")
        return null
    }
   }
function modify(){
    x = prompt("enter task's id: ")
                 if (list.find(({id})=>id == x )){
            
                  console.log(list.find(({id})=> id))
                    let nx = prompt("entrer la nauvelle desription: ")
                   list.find(({id})=> id).description = nx
                   console.log("the new discreption was added succefully")
                   console.log(list)
            }else{
                console.log("error")
            }
        }  
function supremer(){
   let xs = prompt("enter the id of the task u want to delete: " )

         if (list.find(({id})=>id == xs ) !== undefined){
            let index1 = list.findIndex(task => task.id == xs);
            console.log(list.findIndex(task => task.id == xs));
            console.log("do u really want to delete this task ");
            conf = prompt("click c to continue.  ")
            if (conf == "c"){
               list.splice(index1)
               console.log("one item was deleted succefully; ")
               console.log(list)
                }
            }
        }
function status(){
let xst = prompt("enter the id of the task u want change status for.   ")
    if ((list.find(({id})=> id == xst))){
     let nxst  = prompt("enter the new status:  ")
        list.find(({id})=> id).etat === nxst
    }else{
        console.log("unable to find the task. ")
    }
}
while (test){
    console.log("(To-Do List) \n1 = Afficher les tâches  \n2 = Ajouter une tâche   \n3 = Rechercher une tâche \n4 = Modifier une tâche  \n5 = Supprimer une tâche  \n6 = Marquer une tâche comme terminée \n0 = quiter n\....")
    let operation = Number(prompt(": " ))
    if(operation !== 0){
    switch(operation){
        case 1:
            showTasks()
            break;
        case 2:
            addTask()
            break;
        case 3:
            search()
            break;
        case 4:
            modify()
            break;
        case 5:
            supremer()
            break;
        case 6:
            status()
            break;
        default:
            console.log("votre choix est invalide")
    }
   } else {
   test = false
      console.log("merci pour votre visit")
    }
}
