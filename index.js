let myLibrary = [];
let book = document.getElementById('book-container');

let bookLoop = function(){
    for(i = 0; i < myLibrary.length; i++){
      book.innerHTML = libraryChanged
    }
}


//constructor
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = 0;
        this.read = false;
    }


}


function addBookToLibrary() {}







// let firstBook = new Book('Shawhank-Redemption', 'Stephen King', 1, false)
// myLibrary.push(firstBook)

// let secondBook = new Book('Gulag', 'solcheniztyn', 200, true )
// myLibrary.push(secondBook)

// bookLoop()





//JS for the form


//bookNumber allows for closing of Add Book with reclick. Function pops add book form
bookNumber = 0;
function addBook(){
    let form = document.getElementById('book-form')

    if ((form.style.display = "hidden") && (number == 0)){
        form.style.display = "block"
        bookNumber++
    }else if(number > 0){
        form.style.display = "none"
        bookNumber = 0
    }
}
    

