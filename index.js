let myLibrary = [];
let book = document.getElementById('books');
let bookCard = document.getElementById('container')


//constructor
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }


}

let bookLoop = function(){
    for(i = 0; i < myLibrary.length; i++){
        let getBooksInOrder = myLibrary[i];

        bookTitle = getBooksInOrder.title;
        bookAuthor = getBooksInOrder.author;
        pagesOfBookRead = getBooksInOrder.pages;
        bookFinished = getBooksInOrder.read

        const card = document.createElement('div');
        bookCard.appendChild(card);
        card.style.height = "400px"
        card.style.width = "400px"
        card.style.border = "1px solid black"
        
        const wordTitle = document.createElement('p');
        card.appendChild(wordTitle)

        const wordAuthor = document.createElement('p');
        card.appendChild(wordAuthor)
        
        const wordPages = document.createElement('p');
        card.appendChild(wordPages)
        
        const wordRead = document.createElement('p');
        card.appendChild(wordRead)

        wordTitle.innerHTML = bookTitle;
        wordAuthor.innerHTML = bookAuthor;
        wordPages.innerHTML = pagesOfBookRead;
        wordRead.innerHTML = bookFinished
        
        
    
    }
}




function addBookToLibrary() {}







let firstBook = new Book('Shawhank-Redemption', 'Stephen King', 1, false)
myLibrary.push(firstBook)


let secondBook = new Book('Gulag', 'solcheniztyn', 200, true)
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
    

