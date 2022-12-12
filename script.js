let myLibrary = []

let book = function(title, author, pages, read){
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = read
}

function addBookToLibrary(addedBook) {
	myLibrary.push(addedBook)
	return
}

function displayBooks() {
	for (let i = 0; i < myLibrary.length; i++){
	}
}

function createBookList() {
	const bookList = document.createElement('ul')
}

function createBookElements(bookStats) {
	const bookElement = document.createElement('li')
	bookElement.textContent = bookStats
}


// console.table(theHobbit.info())
const theHobbit = new book("The Hobbit","J.R.R Tolkien", 250, 0)
const harryPotter = new book("Harry Potter","J. K. Rowling", 678, 1)
const dune = new book("Dune","F. Herbert", 412, 1)

addBookToLibrary(theHobbit)
addBookToLibrary(harryPotter)
console.table(myLibrary)