  const bContainer = document.querySelector(".body-container");
const myLibrary = [];
let hasUnfinishedForm = false;

function Book(name, author, description) {
  this.name = name;
  this.author = author;
  this.description = description;
}

function addBookToLibrary() {
  // do stuff here
}

const addBook = document.querySelector(".add-btn");

addBook.addEventListener("click", (e) => {
  const form = document.createElement("fieldset");
  form.classList.add("add-book-form");

  const legend = document.createElement("legend");
  legend.textContent = "Add Book Info";
  form.appendChild(legend);

  let info = ["title", "author", "description"];
  for (let i = 0; i < 3; i++) {
    const item = document.createElement("input");
    const itemLabel = document.createElement("label");
    item.setAttribute("type", "text");
    item.setAttribute("name", info[i]);
    item.setAttribute("id", info[i]);
    item.classList.add("input");
    itemLabel.setAttribute("for", info[i]);
    itemLabel.textContent = info[i];
    form.appendChild(itemLabel);
    form.appendChild(item);
  }
  const submit = document.createElement("button");
  submit.classList.add("submit");
  submit.setAttribute("type", "submit");
  submit.textContent = "Add";
  form.appendChild(submit);
  bContainer.appendChild(form);
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const description = document.querySelector("#description").value;
  const book = new Book(title, author, description);
  myLibrary.push(book);
  console.log(myLibrary);
});
