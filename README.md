# Book Library Project

## Overview
This project is a simple book library management system built using HTML, CSS, and JavaScript. Users can add new books, display the list of books, remove books, and toggle the read status of each book.

## Features
- **Add New Book:** Users can add a new book with details such as author, title, number of pages, and read status.
- **Display Books:** Books are displayed in a table or as individual cards.
- **Remove Book:** Each book display has a button to remove the book from the library.
- **Toggle Read Status:** Each book display has a button to toggle the read status of the book.

## Setup
1. Clone the repository to your local machine.
2. Open the project folder.
3. Open `index.html` in your preferred web browser.

## File Structure
```
book-library/
├── index.html
├── style.css
└── script.js
```

## Instructions
1. **HTML Structure:** The `index.html` file contains the basic structure of the webpage, including the form to add new books and the container to display the list of books.

2. **CSS Styling:** The `style.css` file contains styles for the form, book display, buttons, and overall layout of the page.

3. **JavaScript Functionality:** The `script.js` file contains the logic for managing the book library, including the Book constructor, functions to add books, display books, remove books, and toggle the read status.


## Adding a New Book
1. Click the "ADD NEW BOOK" button to open the form.
2. Enter the details of the new book.
3. Click the "Add Book" button to add the book to the library.

## Removing a Book
1. Click the "Remove" button on the book display to remove the book from the library.

## Toggling Read Status
1. Click the "Toggle Read Status" button on the book display to change the read status of the book.

## Additional Notes
- Use `event.preventDefault();` to prevent the form from submitting the data to a server.
- Use `data-attribute` to associate DOM elements with the corresponding book objects in the library array.

## License
This project is open-source and available under the [MIT License](LICENSE).

Feel free to customize this README file further based on any additional features or specific instructions you want to include.
