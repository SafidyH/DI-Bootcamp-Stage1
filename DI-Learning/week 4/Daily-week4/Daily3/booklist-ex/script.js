const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://example.com/harry_potter.jpg",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://example.com/great_gatsby.jpg",
        alreadyRead: false
    }
];

const listBooksDiv = document.querySelector(".listBooks");

const table = document.createElement("table");

const tableHeader = document.createElement("tr");
const headerTitle = document.createElement("th");
headerTitle.textContent = "Title";
const headerAuthor = document.createElement("th");
headerAuthor.textContent = "Author";
tableHeader.appendChild(headerTitle);
tableHeader.appendChild(headerAuthor);
table.appendChild(tableHeader);

allBooks.forEach(book => {
    const tableRow = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const imageCell = document.createElement("td");
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    imageCell.appendChild(bookImage);

    tableRow.appendChild(titleCell);
    tableRow.appendChild(authorCell);
    tableRow.appendChild(imageCell);

    if (book.alreadyRead) {
        tableRow.classList.add("read");
    }

    table.appendChild(tableRow);
});

listBooksDiv.appendChild(table);