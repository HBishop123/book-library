let myLibrary = [];
let book = document.getElementById('book1');

let bookLoop = function(){
    for(i = 0; i < myLibrary.length; i++){
       book.innerHTML = myLibrary
    }
}




class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = 0;
        this.read = false;
    }


}

let firstBook = new Book('Shawhank-Redemption', 'Stephen King', 1, false)
myLibrary.push(firstBook)
console.log(firstBook)
console.log(myLibrary)


bookLoop()

function addBookoLibrary() {}