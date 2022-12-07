let myLibrary = [];
let bookCard = document.getElementById('book-container')

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
    if(myLibrary.length > 1){
        myLibrary.shift()}
    for(i = 0; i < myLibrary.length; i++){
        
       
        let getBooksInOrder = myLibrary[i];

        bookTitle = getBooksInOrder.title;
        bookAuthor = getBooksInOrder.author;
        pagesOfBookRead = getBooksInOrder.pages;
        bookFinished = getBooksInOrder.read

        const card = document.createElement('div');
        bookCard.appendChild(card);
        card.style.height = "200px"
        card.style.border = "1px solid black"
        card.style.display = "flex"
        card.style.flexDirection = "column"
        card.style.alignItems = "center"
        card.style.justifyContent = "space-around"
        card.style.position = "relative"
        

        
        const wordTitle = document.createElement('p');
        card.appendChild(wordTitle)

        const wordAuthor = document.createElement('p');
        card.appendChild(wordAuthor)
        
        const wordPages = document.createElement('p');
        card.appendChild(wordPages)
        
        const wordRead = document.createElement('p');
        card.appendChild(wordRead)

        const deleteButton = document.createElement('button')
        card.appendChild(deleteButton)


        
        deleteButton.style.border = "none"
        deleteButton.style.alignSelf = "end"
        deleteButton.style.backgroundColor = "white"
        deleteButton.style.position = "absolute"
        deleteButton.style.top = "0"
        deleteButton.style.width = "20px"
        deleteButton.style.height = "20px"
        deleteButton.style.display = "flex"
        deleteButton.style.color = "red"
        
        
       deleteButton.innerHTML = "x"
       wordTitle.innerHTML = bookTitle;
       wordAuthor.innerHTML = bookAuthor;
       wordPages.innerHTML = pagesOfBookRead;
       wordRead.innerHTML = bookFinished
        
        
    
    }
}




const addBook = (e) => {
    e.preventDefault();
    let book = {
        title: document.getElementById('book-name').value,
        author: document.getElementById('book-author').value,
        pages: document.getElementById('pages-read').value,
        read: document.querySelector('input[name="finished"]:checked').value
    }
    
    let title = book.title;
    let author = book.author;
    let pages = book.pages;
    let read = book.read;

   let result = new Book(title, author, pages, read)
   myLibrary.push(result)
   bookLoop()
   document.forms[0].reset()
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBook)
});
 

//JS for the form
//bookNumber allows for closing of Add Book with reclick. Function pops add book form
bookNumber = 0;
let form = document.getElementById('book-form')
function addBookPopup(){
    

    if ((form.style.display = "hidden") && (bookNumber == 0)){
        form.style.display = "block"
        bookNumber++
        

    }else if(bookNumber > 0){
        form.style.display = "none"
        bookNumber = 0
        document.body.style.backgroundColor = "white"
    }
}

function closeForm(){
    form.style.display = "none";
    bookNumber = 0;
    document.body.style.backgroundColor = "white"
}
    
document.getElementById('click-container').addEventListener("click", function(){
    form.style.display = "none";
    bookNumber = 0;
    document.body.style.backgroundColor = "white"
})

