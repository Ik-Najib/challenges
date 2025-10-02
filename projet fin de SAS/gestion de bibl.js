const prompt = require("prompt-sync")()
let valid = [1,2]
let x
running = true
menu2running = true

let subscribers = [
    {id: "ihhd", family_Name: "iknioun", first_Name: "Najib", Email: "tyuiophjkl" }
]
function addsub(){
    let id = prompt("Id: ")
    let family_Name = prompt("Family Name: ")
    let first_Name = prompt("First Name: ")
    let Email = prompt("Email: ")
        let subs= {
        id: id,
        family_Name,
        first_Name,
        Email
            }
        subscribers.push(subs)
            console.log("1 item was added successfully")
            console.log("Click enter to add one more book")
            console.log("Click q to go to the menu")            
}

function borrow () {
let x = prompt("Borrower's Id: ")
for (i in subscribers){
    if(x==subscribers[i].id){
        console.log(subscribers[i].id)
        let y = prompt("book's Id")
        for (i in library){ 
        if (y !== library[i].id || library[i].available == "No"){
            console.log("Book you'are looking for not available")
        }else {
            library[i].available = "No"
        }
    }
    }else {
        console.log("no result was found. ")
        console.log("Click 1 to add a New subscription")
        console.log("or Click 2 to go back to back to menu")
       let a = prompt(" ")
    
    while ( a !== "1" && a !== "2"){
         addsub()
    }

}
} }  
function listsofB(){ 
    do { 

    let menu2 = prompt("1 =  Search  \n 2 = List\n 3 = See Available Books \n4 = sort (A-Z,Z-A) \n...:")

    switch (menu2){
        case "1":
                Search()
                menu2running = false
        break;
        case "2":
                listofbooks()
                menu2running = false
        break;
        case "3":
                available()
                menu2running = false
        break;
        case "4":
            sort()
            menu2running = false
        default:
            console.log("invalid input chose one of the options below. ")
    }

}while( menu2running == true)
}
function addbook(){
    do{
        let id = prompt("Book's Id... ")
        let title = prompt("Books Title... ")
        let author = prompt("Author...")
        let year = prompt("Year of Publication...")
        
        let available
        do{
            available  = prompt("Is the book available? \n Click 1 if YES.\n Click 2 if NO. ")
            if (available == valid[0] ) {
                    available = "Yes"
                }else if(available == valid[1]){
                    available = "No"
                }else {
                    console.log("Invalid Input try again. ")
            }      
            }while(available != "Yes" && available != "No")
        let books = {
            id: id,
            title: title,
            author: author,
            year: year,
            available: available,
        }
                library.push(books)
                console.log("1 item was added successfully")
                console.log("Click enter to add one more book")
                console.log("Click q to go to the menu")
                x = prompt(" \n.........")
        }while (x !="q")
            
}
function sort(){
        let x = prompt("1 = sort by title 1 \n 2 = sort by year of publication.\n ...:" )
        if (x == 1){
            console.log("Ascending: A-Z")
            let librsort = [...library].sort((a,b)=> a.title.localeCompare(b.title))
            console.log(librsort)
            let y = prompt("press 1 for discending order. ")
            if (y == 1){
            let librsort = [...library].sort((a,b)=> b.title.localeCompare(a.title))
            console.log(librsort)
    }}else if(x == 2) {
            console.log("Ascending: A-Z")
            let librsort = [...library].sort((a,b)=> a.anne - b.anne)
            console.log(librsort)
            let y = prompt("press 1 for discending order. ")
            if (y = 1){
                library.sort((a,b)=> b.anne - a.anne)
            }
        }
}

function available(){
    let filterdarray =  library.filter((book)=> {
     return book.available == "Yes"
    })
     console.log(filterdarray)
}
function Search(){
            let x = (prompt("Book's Id : "))
            let book = []
            for (let i = 0; i < library.length; i++){
                
                if (library[i].id==x){
                    book.push(library[i])
                }
                
            }if (book.length == 0){
                console.log("no match found")
            }else{
                console.log(book)
            }
}
function listofbooks(){
    if (library.length==0){
        console.log("No books in the library yet.")
    }else{ 
      for (i in library) {
            console.log(`${library[i].id}- ${library[i].title} - ${library[i].author} - ${library[i].year}- ${library[i].available}`)
        }
    }}
while (running){
    console.log("(To-Do List) \n1 = add books  \n2 = Books \n3 = Search For A Book  \n4 = see available Books \n5 = Borrow \n0 = quiter n\....")
    let operation = Number(prompt(": " ))
if (operation !== 0){ 
    switch(operation){
        case 1:
            addbook()
            break;
        case 2:
            listsofB()
            break;
        case 3:
            Search()
            break;
        case 4:
            availble()
            break;
        case 5:
             borrow ()
            break;
        default:
            console.log("Invalid Input")
    }
   }else{ 
    running = false
      console.log("Quiting...")
    }}


    



