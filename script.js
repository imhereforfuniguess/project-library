let myLibrary = []

let book = function(title, author, pages, read){
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = new Boolean(read)
}

const emptyBook = new book("titleval", "authorval", "pagesval", "readval")

function addBookToLibrary(addedBook) {
	myLibrary.push(addedBook)
}

function createBook(book) {
	createBookHolder(book)
	createBookElements(book)
}

function createBookHolder(book) {
	const bookList = document.createElement('ul')
	bookList.textContent = book.title
	container.appendChild(bookList)

	// add a data attribute to ul
	bookList.dataset.number = myLibrary.indexOf(book)
}

// function deleteBook(index) {
// 	let deletedBook = document.querySelector(`[data-number="${index}"]`)
// 	console.log(deletedBook)
// }

function createBookElements(book) {

	// Create title, author, pages, read fields
	for (let i = 0; i < Object.keys(book).length; i++){
		const bookElement = document.createElement('li')
		bookElement.textContent = `${Object.keys(book)[i]}:   ${Object.values(book)[i]}`
		bookElement.dataset.number = myLibrary.indexOf(book)
		container.appendChild(bookElement)
	}

	// Create book number in array, but don't append it
	const bookNumber = document.createElement('li')
	bookNumber.textContent = myLibrary.indexOf(book)
	bookNumber.dataset.number = myLibrary.indexOf(book)


	// Create delete book button
	const bookDeleteButton = document.createElement('button')
	bookDeleteButton.textContent = "delete"
	container.appendChild(bookDeleteButton)
	bookDeleteButton.dataset.number = myLibrary.indexOf(book)


	bookDeleteButton.addEventListener('click', () => {
		// Remove book container
		while ((document.querySelector(`[data-number="${myLibrary.indexOf(book)}"]`)) != 0) {
			let deletedBook = document.querySelector(`[data-number="${myLibrary.indexOf(book)}"]`)
			deletedBook.remove()
	
		}
		// // Remove book elements
		// for (let i = 0; i < Object.keys(book).length+1; i++){
		// 	const bookElement = document.querySelector('li')
		// 	bookElement.remove()
		// }

		// // Remoe delete button
		// bookDeleteButton.remove()
	})
}



function displayLibrary() {
	for (let i = 0; i < myLibrary.length; i ++){
		createBook(myLibrary[i])
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

		input.setAttribute('id', Object.keys(emptyBook)[i])

		if ((i) == 3){
			input.setAttribute('type', 'checkbox')
		} else {
			input.setAttribute('type', 'text')
		}

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
	for (let i = 0; i < Object.keys(emptyBook).length-1; i++){
		let input = document.getElementById(Object.keys(emptyBook)[i]).value
		tempArray.push(input)
		console.log(input)
	}

	if (document.getElementById(Object.keys(emptyBook)[3]).checked) {
		tempArray.push(true)
	} else {
		tempArray.push(false)
	}




	// How to make sending function automatic
	const newBookDeclare = new book (tempArray[0],tempArray[1],tempArray[2],tempArray[3])
	addBookToLibrary(newBookDeclare)
	createBook(newBookDeclare)
	console.log(tempArray)

	const form = document.querySelector('form')
	form.remove()
	
}



// console.table(theHobbit.info())
const theHobbit = new book("The Hobbit","J.R.R Tolkien", 250, 0)
const harryPotter = new book("Harry Potter","J. K. Rowling", 678, 1)
const dune = new book("Dune","F. Herbert", 412, 1)


addBookToLibrary(theHobbit)
addBookToLibrary(harryPotter)


displayLibrary()


// TESTING

// const testButton = document.querySelector('.testButton')


// let a = 5
// console.log(a)

// testButton.addEventListener('click', () => {
// 	a = 10
// })

// console.log(a)


// TESTING MOST COMMON QUESTIONS HERE CAUSE WHY NOT
// const testButton = document.querySelector('[data-id="test1"]')
// testButton.addEventListener('click', () => {
// 	window.location.href = 'https://github.com/'
// })