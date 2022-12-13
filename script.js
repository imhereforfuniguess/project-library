let myLibrary = []

let book = function(title, author, pages, read){
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = read
}

const emptyBook = new book("titleval", "authorval", "pagesval", "readval")

function addBookToLibrary(addedBook) {
	myLibrary.push(addedBook)
}

function createBook(book) {
	createBookList(book)
	createBookElements(book)
}

function createBookList(book) {
	const bookList = document.createElement('ul')
	bookList.textContent = book.title
	container.appendChild(bookList)
}

function createBookElements(book) {
	for (let i = 0; i < Object.keys(book).length; i++){
		const bookElement = document.createElement('li')
		bookElement.textContent = `${Object.keys(book)[i]}:   ${Object.values(book)[i]}`
		container.appendChild(bookElement)
	}
}


const container = document.querySelector('.container')
const newBookButton = document.querySelector('.newBookButton')

newBookButton.addEventListener('click', createForm)

function createForm() {
	const form = document.createElement('form')
	container.append(form)
	for (let i = 0; i < Object.keys(emptyBook).length; i++) {
		const label = document.createElement('label')
		const input = document.createElement('input')

		label.setAttribute('for', Object.keys(emptyBook)[i])
		label.textContent = Object.keys(emptyBook)[i]

		input.setAttribute('type', 'text')
		input.setAttribute('id', Object.keys(emptyBook)[i])

		form.append(label)
		form.append(input)
	}

	
	const addBookButton = document.createElement('button')
	form.append(addBookButton)
	addBookButton.textContent = "Add Book"
	addBookButton.addEventListener('click', readForm)
	
}

// submit button takes the data from each dom element and puts it in memory
function readForm () {
	event.preventDefault();
	let tempArray = []
	for (let i = 0; i < Object.keys(emptyBook).length; i++){
		let input = document.getElementById(Object.keys(emptyBook)[i]).value
		tempArray.push(input)
	}
	const newBookDeclare = new book (tempArray[0],tempArray[1],tempArray[2],tempArray[3])
	addBookToLibrary(newBookDeclare)
	createBook(newBookDeclare)
	console.log(tempArray)
}



// console.table(theHobbit.info())
const theHobbit = new book("The Hobbit","J.R.R Tolkien", 250, 0)
const harryPotter = new book("Harry Potter","J. K. Rowling", 678, 1)
const dune = new book("Dune","F. Herbert", 412, 1)

addBookToLibrary(theHobbit)
addBookToLibrary(harryPotter)

createBook(harryPotter)
createBook(theHobbit)


// TESTING

// const testButton = document.querySelector('.testButton')


// let a = 5
// console.log(a)

// testButton.addEventListener('click', () => {
// 	a = 10
// })

// console.log(a)
