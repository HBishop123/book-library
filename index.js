let myLibrary = ['ghost', 'animal', 'lolol'];
let book = document.getElementById('book');

let bookLoop = function(){
    for(i = 0; i < myLibrary.length; i++){
       book.innerHTML = myLibrary
    }
}
bookLoop()



class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = 0;
        this.read = false;
    }


}

function addBookoLibrary() {

}