const bContainer = document.querySelector(".body-container");
const gallery = document.querySelector(".gallery-container");
const addBook = document.querySelector(".add-btn");
const form = document.querySelector(".book-form");
const cancel = document.querySelector(".cancel");
const submit = document.querySelector(".submint");

const myLibrary = [];
let hasUnfinishedForm = false;

function Book(title, author, description) {
  this.title = title;
  this.author = author;
  this.description = description;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBook.addEventListener("click", (e) => {
  form.showModal();
  form.style.position = "fixed";
  form.style.top = "50%";
  form.style.left = "50%";
  form.style.transform = "translate(-50%, -50%)";
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;
  const description = document.querySelector("#description").value;

  const newCard = document.createElement("div");
  newCard.classList.add("card-container");
  let info = ["title", "author", "pages", "status", "description"];
  for (let i = 0; i < 5; i++) {
    const item = document.createElement("div");
    item.classList.add(`${info[i]}`);
    if (info[i] == "status") {
      item.setAttribute("id", `${status}`);
    }
    item.innerHTML = `${eval(info[i])}`;
    newCard.appendChild(item);
  }
  gallery.appendChild(newCard);
  const book = new Book(title, author, description);
  myLibrary.push(book);
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  form.close();
});
