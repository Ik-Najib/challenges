const prompt = require("prompt-sync")()
let menu2 = false
let library = [
    { id: "B001", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: "yes" },
    { id: "B002", title: "1984", author: "George Orwell", year: 1949,available: "No" },
    { id: "B003", title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960,available: "yes" },
    { id: "B004", title: "Pride and Prejudice", author: "Jane Austen", year: 1813,available: "No"}
]

function Search(){
    let x = (prompt("Book's Id"))
    for (let i = 0; i < library.length; i++){
        
        if (library[i].id==x){
            console.log(library[i])
        }else {
            console.log("no match found")
        }
        
    }
}
function listofbooks(){
    if (library == 0){
        console.log("No Books in the Library Yet.")
    }
            console.log(`${books.id} - ${books.title} - ${books.author} - ${books.year} - ${books.available} `)
            
    }
function availble() {
        let filteredarray = library.filter((book) => {
            return book.available == "yes"
        })
            console.log(filteredarray)
         
        }
function listsofb(){ 
    do { 

    let menu = Number(prompt("1 =  Search  \n 2 = List\n 3 = See Available Books \n...:"))

    switch (menu){
        case 1:
                Search()
                menu2 = true
        break;
        case 2:
                listofbooks()
                menu2 = true
        break;
        case 3:
                availble()
                menu2 = true
        break;
        default:
            console.log("invalid input chose one of the options below. ")
    }




}while(menu2 = false)
}
