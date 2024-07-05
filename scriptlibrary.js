
// Event listener to handle the form
document.getElementById('newBook').addEventListener('click', () => {
    const inputSection = document.getElementById('inputSection');
    inputSection.style.display = 'block';
});

document.getElementById('bookForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    document.getElementById('bookForm').reset();
    const inputSection = document.getElementById('inputSection');
    inputSection.style.display = 'none';
});

// Create Book Constructor and Add Books to Library
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Add a function to loop through the array and display the books
function displayBooks() {
    const libraryContainer = document.getElementById('libraryContainer');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Author: ${book.author}`;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(bookPages);

        const bookRead = document.createElement('p');
        bookRead.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        bookCard.appendChild(bookRead);

        // Remove book button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('data-index', index);
        removeButton.addEventListener('click', removeBook);
        bookCard.appendChild(removeButton);

        // Toggle read status button
        const toggleReadButton = document.createElement('button');
        toggleReadButton.classList.add('toggle-read-button');
        toggleReadButton.textContent = 'Toggle Read Status';
        toggleReadButton.setAttribute('data-index', index);
        toggleReadButton.addEventListener('click', toggleReadStatus);
        bookCard.appendChild(toggleReadButton);

        libraryContainer.appendChild(bookCard);
    });
}

function removeBook(event) {
    const bookIndex = event.target.getAttribute('data-index');
    myLibrary.splice(bookIndex, 1);
    displayBooks();
}

function toggleReadStatus(event) {
    const bookIndex = event.target.getAttribute('data-index');
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
    displayBooks();
}
