let myLibrary = []

let book = function(title, author, pages, read){
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = read
}

function addBookToLibrary(addedBook) {
	myLibrary.push(addedBook)
}

function displayBooks() {
	for (let i = 0; i < myLibrary.length; i++){
	}
}

function createBookList() {
	const bookList = document.createElement('ul')
	bookList.textContent = "BOOK LIST TEST"
	libraryPanel.appendChild(bookList)
}

function createBookElements(book) {
	for (let i = 0; i < Object.keys(book).length; i++){
		const bookElement = document.createElement('li')
		bookElement.textContent = Object.values(book)[i]
		libraryPanel.appendChild(bookElement)
	}
}


const libraryPanel = document.querySelector('.container')


// console.table(theHobbit.info())
const theHobbit = new book("The Hobbit","J.R.R Tolkien", 250, 0)
const harryPotter = new book("Harry Potter","J. K. Rowling", 678, 1)
const dune = new book("Dune","F. Herbert", 412, 1)


console.log()

addBookToLibrary(theHobbit)
addBookToLibrary(harryPotter)
console.table(myLibrary)

createBookList()
createBookElements(harryPotter)
createBookList()
createBookElements(theHobbit)