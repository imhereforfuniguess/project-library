let myLibrary = []

let book = function(title, author, pages, read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

book.prototype.info = function (){
  return [this.title, this.pages]
}


function addBookToLibrary(addedBook) {
  myLibrary.push(addedBook)
  return
}

// console.table(theHobbit.info())
const theHobbit = new book("The Hobbit","J.R.R Tolkien", 250, 0)
const harryPotter = new book("Harry Potter","J. K. Rowling", 678, 1)

addBookToLibrary(theHobbit)
addBookToLibrary(harryPotter)
console.table(myLibrary)