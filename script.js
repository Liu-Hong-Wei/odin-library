const bContainer = document.querySelector(".body-container");
const gallery = document.querySelector(".gallery-container");
const addBook = document.querySelector(".add-btn");
const formContainer = document.querySelector(".book-form");
const realForm = document.querySelector("form");
const cancel = document.querySelector(".cancel");
const submit = document.querySelector(".submit");
const myLibrary = [];

function Book(title, author, pages, status, description) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.description = description;
}

function showAllBooks(library) {
  for (let book of library) {
    showABook(book);
  }
}

function showABook(book) {
  const newCard = document.createElement("div");
  newCard.classList.add("card-container");
  let info = ["status", "title", "author", "pages", "description"];
  for (let i = 0; i < 5; i++) {
    const item = document.createElement("div");
    const value = book[`${info[i]}`];
    item.classList.add(`${info[i]}`);
    if (info[i] === "status") {
      item.classList.add(`${value}`);
    }
    item.textContent = `${value}`;
    newCard.appendChild(item);
  }
  addToggleStatusBtn(newCard);
  addRemoveBtn(newCard);
  gallery.appendChild(newCard);
}

function addRemoveBtn(newCard) {
  const remove = document.createElement("button");
  remove.textContent = "Delete";
  newCard.appendChild(remove);
  remove.addEventListener("click", (e) => {
    newCard.remove();
  });
}

function addToggleStatusBtn(newCard) {
  const toggle = document.createElement("button");
  toggle.textContent = "change reading status";
  toggle.addEventListener("click", (e) => {
    const nowStatus = newCard.querySelector(".status");
    const statusOrder = ["want", "reading", "finished"];
    for (let i = 0; i < statusOrder.length; i++) {
      if (nowStatus.classList[1] === statusOrder[i]) {
        nowStatus.classList.remove(statusOrder[i]);
        nowStatus.classList.add(`${statusOrder[(i + 1) % statusOrder.length]}`);
        nowStatus.textContent = `${statusOrder[(i + 1) % statusOrder.length]}`;
        break;
      }
    }
  });
  newCard.appendChild(toggle);
}

addBook.addEventListener("click", (e) => {
  formContainer.showModal();
  // center the form dialog modal
  formContainer.style.position = "fixed";
  formContainer.style.top = "50%";
  formContainer.style.left = "50%";
  formContainer.style.transform = "translate(-50%, -50%)";
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;
  const description = document.querySelector("#description").value;

  const book = new Book(title, author, pages, status, description);
  myLibrary.push(book);
  showABook(book);
  realForm.reset();
  formContainer.close();
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.close();
});
