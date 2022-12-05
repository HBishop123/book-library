let myLibrary = [];
let book = document.getElementById('books');
let bookCard = document.getElementById('container')

let bookLoop = function(){
    for(i = 0; i < myLibrary.length; i++){
        let getBooksInOrder = myLibrary[i];

        const card = document.createElement('div');
        bookCard.appendChild(card);
        card.style.height = "400px"
        card.style.width = "400px"
        card.style.border = "1px solid black"
        
        const words = document.createElement('p');
        card.appendChild(words)
        

        bookTitle = getBooksInOrder.title;
        bookAuthor = getBooksInOrder.author;
        pagesRead = getBooksInOrder.pages;
        bookFinished = getBooksInOrder.read
        
        words.innerHTML = bookTitle


        
        console.log(bookTitle)
        console.log(bookAuthor)
        console.log(pagesRead)
        console.log(bookFinished)
        
    
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







let firstBook = new Book('Shawhank-Redemption', 'Stephen King', 1, false)
myLibrary.push(firstBook)


let secondBook = new Book('Gulag', 'solcheniztyn', 200, true )
myLibrary.push(secondBook)


bookLoop()









//JS for the form


//bookNumber allows for closing of Add Book with reclick. Function pops add book form
bookNumber = 0;
let form = document.getElementById('book-form')
function addBook(){
    

    if ((form.style.display = "hidden") && (bookNumber == 0)){
        form.style.display = "block"
        bookNumber++
    }else if(bookNumber > 0){
        form.style.display = "none"
        bookNumber = 0
    }
}

function closeForm(){
    form.style.display = "none";
    bookNumber = 0;
}
    

