//Array of objects for all the books
console.log('hello console person')
let myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
console.log(myLibrary);
if (!myLibrary) {
  myLibrary = [];
}

let bookCard = document.getElementById("book-container");
let header = document.querySelector("header");

// scales with each book card thats put on the page - is reset to -1 when a card is deleted
scalingNumber = -1;

// scales as to not duplicate book cards on page - is reset to 0 when a card is deleted
loopNumber = 0;

//constructor for all books
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

//this function loops through the array, and for each item, makes a card and displays the items information on the card. it also scales loopNumber & scalingNumber.
let bookLoop = function () {
  for (i = loopNumber; i < myLibrary.length; i++) {
    //Incrementing global numbers
    loopNumber++;
    scalingNumber++;

    let getBooksInOrder = myLibrary[i];

    //Grabbing values of [i] from object in array looped over
    bookTitle = getBooksInOrder.title;
    bookAuthor = getBooksInOrder.author;
    pagesOfBookRead = getBooksInOrder.pages;
    bookFinished = getBooksInOrder.read;

    //styling for the book cards
    const card = document.createElement("div");
    card.className = "cardsForBooks";
    bookCard.appendChild(card);
    card.style.height = "fit-content";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.justifyContent = "space-around";
    card.style.gap = "5px";
    card.style.position = "relative";
    card.style.backgroundColor = "rgb(202, 217, 222)";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0px 4px 5px 0px rgba(0,0,0,0.75)";
    card.style.padding = "10px 10px 10px 10px";

    //Appending and creating elements for Book Card
    const wordTitle = document.createElement("p");
    card.appendChild(wordTitle);

    const wordAuthor = document.createElement("p");
    card.appendChild(wordAuthor);

    const wordPages = document.createElement("p");
    card.appendChild(wordPages);

    const finished = document.createElement("p");
    card.appendChild(finished);

    const wordRead = document.createElement("button");
    wordRead.className = "readBook";
    wordRead.setAttribute("id", scalingNumber);
    card.appendChild(wordRead);
    wordRead.style.padding = "2px 0px 2px 0px";
    wordRead.style.width = "60px";
    wordRead.style.borderRadius = "5px";
    wordRead.style.border = "none";
    wordRead.style.scale = "1.1";

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", scalingNumber);
    deleteButton.className = "deleteButton";
    card.appendChild(deleteButton);

    //styling for the card deleteButton
    deleteButton.style.border = "none";
    deleteButton.style.alignSelf = "end";
    deleteButton.style.backgroundColor = "white";
    deleteButton.style.position = "absolute";
    deleteButton.style.top = "0";
    deleteButton.style.width = "20px";
    deleteButton.style.height = "20px";
    deleteButton.style.color = "red";
    deleteButton.style.background = "none";
    deleteButton.style.display = "flex";
    deleteButton.style.alignItems = "center";
    deleteButton.style.justifyContent = "center";
    deleteButton.style.padding = "5px 5px 0px 0px";

    //styling for the gap between pages HTML and if book is finished
    let pagesGap = card.children;
    pagesGap.item(2).style.paddingBottom = "15px";
    wordPages.style.padding = "50px 0p 10px 0px";

    //styling for 'Finished Book?' text
    finished.style.fontSize = "1.1em";
    finished.style.fontStyle = "italic";

    wordTitle.style.wordBreak = "break-all";
    wordTitle.style.textAlign = "center";
    wordAuthor.style.wordBreak = "break-all";
    wordAuthor.style.textAlign = "center";

    //Adding HTML to the book cards
    deleteButton.innerHTML = "x";
    wordTitle.innerHTML = bookTitle;
    wordAuthor.innerHTML = bookAuthor;
    wordPages.innerHTML = `${pagesOfBookRead} Pages`;
    finished.innerHTML = "Book Finished?";
    wordRead.innerHTML = bookFinished;

    //gives the 'Read Book?' button green or red depending on yes or no chosen
    if (getBooksInOrder.read == "Yes") {
      wordRead.style.color = "green";
    } else if (getBooksInOrder.read != "Yes") {
      wordRead.style.color = "red";
    }
  }
};

//this function gets the information from the add-book popup, uses my constructor and pushes it to my book array before resetting the form & calling my function to loop through the array
const addBook = (e) => {
  e.preventDefault();

  let book = {
    title: document.getElementById("book-name").value,
    author: document.getElementById("book-author").value,
    pages: document.getElementById("pages-read").value,
    read: document.querySelector('input[name="finished"]:checked').value,
  };
  let title = book.title;
  let author = book.author;
  let pages = book.pages;
  let read = book.read;

  let result = new Book(title, author, pages, read);
  myLibrary.push(result);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  bookLoop();
  document.forms[0].reset();
};

//submits the information by calling the above addBook function
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addBook);
});

//JS for the form
//bookNumber allows for closing of Add Book with reclick. Function pops add book form
bookNumber = 0;
let form = document.getElementById("book-form");
function addBookPopup() {
  if ((form.style.display = "hidden") && bookNumber == 0) {
    form.style.display = "block";
    bookNumber++;
  } else if (bookNumber > 0) {
    form.style.display = "none";
    bookNumber = 0;
    document.body.style.backgroundColor = "white";
  }
}

function closeForm() {
  form.style.display = "none";
  bookNumber = 0;
  document.body.style.backgroundColor = "white";
}

document
  .getElementById("click-container")
  .addEventListener("click", function () {
    form.style.display = "none";
    bookNumber = 0;
    document.body.style.backgroundColor = "white";
  });

//This function allows you to delete a card through event delegation. if a cross button is pressed, all cards are removed and all delete buttons are removed from the DOM.
//The correct item from myLibrary array is removed due to the id value of the cross button being the same, then both Scaling number and LoopNumber are reset,
// Before calling my function to loop through the myLibrary array and resubmit the cards on the page, whilst resetting the delete buttons id's so they remove the correct item in the array going forward.
bookCard.addEventListener("click", function (e) {
  const target = e.target;
  let allCards = document.querySelectorAll(".cardsForBooks");
  // let allDeleteButtons = document.querySelectorAll('#scalingNumber')

  if (target.matches(".deleteButton")) {
    allCards.forEach((e) => e.remove());
    // allDeleteButtons.forEach(e => e.remove())

    myLibrary.splice(target.id, 1);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    scalingNumber = -1;
    loopNumber = 0;

    bookLoop();
  }
});

//function that changes read status of book from yes to no or vice versa.
//It selects correct item in array by using scalingNumber id attached to the button.
bookCard.addEventListener("click", function (e) {
  const target = e.target;
  if (e.target.innerHTML == "Yes") {
    target.value = "Yes";
  } else if (e.target.innerHTML == "No") {
    target.value = "No";
  }

  if (target.matches(".readBook")) {
    if (target.value !== "Yes") {
      target.innerText = "Yes";
      target.value = "Yes";
      let findCorrect = myLibrary[target.id];
      findCorrect.read = "Yes";
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      target.style.color = "green";
    } else if (target.value !== "No") {
      target.innerText = "No";
      target.value = "No";
      let findCorrect = myLibrary[target.id];
      findCorrect.read = "No";
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      target.style.color = "red";
    }
  }
});

bookLoop();
