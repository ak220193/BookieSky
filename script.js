
function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value;
    console.log("Search for:", searchTerm);
}

function deleteBook(event) {
    const card = event.target.closest('.card-container');
    card.remove();
}


function deleteContent(event) {
    const card = event.target.closest('.card-container');
    card.querySelector('p').textContent = "";
}


function toggleModal() {
    const modalSection = document.querySelector('.modalcls');
    modalSection.classList.toggle('hidden');
}

function addBook() {
    const title = document.getElementById("title-book1").value;
    const author = document.getElementById("title-book2").value;
    const content = document.getElementById("content").value;


    const newCardContainer = document.createElement("div");
    newCardContainer.classList.add("card-container");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");

    const titleHeading = document.createElement("h3");
    titleHeading.textContent = title;

    const authorHeading = document.createElement("h4");
    authorHeading.textContent = author;

    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = content;


    titleDiv.appendChild(titleHeading);
    titleDiv.appendChild(authorHeading);
    titleDiv.appendChild(contentParagraph);

    newCardContainer.appendChild(titleDiv);


    const btnDiv = document.createElement("div");
    btnDiv.classList.add("btn");

    const deleteBookBtn = document.createElement("button");
    deleteBookBtn.textContent = "Delete Book";
    deleteBookBtn.addEventListener("click", deleteBook);

    const deleteContentBtn = document.createElement("button");
    deleteContentBtn.textContent = "Delete content";
    deleteContentBtn.addEventListener("click", deleteContent);

    btnDiv.appendChild(deleteBookBtn);
    btnDiv.appendChild(deleteContentBtn);

    newCardContainer.appendChild(btnDiv);


    const bookListSection = document.querySelector(".book-list");
    bookListSection.appendChild(newCardContainer);


    document.getElementById("title-book1").value = "";
    document.getElementById("title-book2").value = "";
    document.getElementById("content").value = "";
    toggleModal();
}


document.getElementById("addBookBtn").addEventListener("click", addBook);
