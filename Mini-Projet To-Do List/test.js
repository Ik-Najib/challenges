 const prompt = require("prompt-sync")()
 let valid = [1,2]
let library = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: "yes" },
    { id: 2, title: "1984", author: "George Orwell", year: 1949,available: "no" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960,available: "yes" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813,available: "no"}
]

function addbook(){
    do{
        let Id = prompt("Book's Id... ")
        let title = prompt("Books Title... ")
        let author = prompt("Author...")
        let year = Number(prompt("year of Publication...")) 
        let available
        do{
            console.log("Is the book available? \n Click 1 if YES.\n Click 2 if NO.")
            available  = prompt(" ")
            if (available == valid[0] ) {
                    available = "Yes"
                }else if(available == valid[1]){
                    available = "No"
                }else {
                    console.log("Invalid Input try again. ")
            }      
            }while(available !== "Yes" && available !== "No")
        let books = {
            Id: Id,
            title: title,
            author: author,
            year: year,
            available: available,
        }
                library.push(books)
                console.log("1 item was added successfully")
                console.log("Click enter to add one more book")
                console.log("Click q to go to the menu")
                x = prompt(" \n             .........")
        }while (x !="q")
            
    }






function sortArr(){
let x = prompt("1 = sort by title \n 2 = sort by year of publication.\n ...:" )
if (x == 1){
    console.log("Ascending: A-Z")
    let librsort = [...library].sort((a,b)=> a.title.localeCompare(b.title))
    console.log(librsort)
    let y = prompt("press 1 for discending order. ")
    if (y == 1){
    let librsort = [...library].sort((a,b)=> b.title.localeCompare(a.title))
    console.log(librsort)
    }
}else if(x == 2) {
    console.log("Ascending: 1-9")
    let librsort = [...library].sort((a,b)=> a.anne - b.anne)
    console.log(librsort)
    let y = prompt("press 1 for discending order: 9-1 ")
    if (y = 1){
        library.sort((a,b)=> b.anne - a.anne)
        console.log(librsort)
    }
}else {
    console.log("click Anwhere to go back")
}
}
sortArr()

 let menu = prompt("1 =  Search  \n 2 = List\n 3 = See Available Books \n...:")
    function Search(){
        if (menu == 1){
            let x = Number(prompt("Book's Id"))
            for (let i = 0; i < library.length; i++){
                
                if (library[i].id==x){
                    console.log(library[i])
                }else {
                    console.log("no match found")
                }
            }
        }
    }
    function listofbooks(){
        if (menu == 2){
            console.log(library)
        }
    }
        function availble() {
        let filteredarray = library.filter((book) => {
            return book.available == "yes"
        })
            console.log(filteredarray)
        }
     function Search(){
        let item = prompt("Id: ")
        for (let i = 0; i< library.length; i++){
            if(item == library[i]){
                console.log(library[i])
            }
        }
     }
      listofbooks()
     availble()
       addbook()


   
    if (menu ==1){
        
    }
    
    else if ( menu == 3) {
        availble()
    }else {
        console.log("error")
    }



 