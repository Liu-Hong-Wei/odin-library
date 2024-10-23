const bContainer = document.querySelector(".body-container");
const gallery = document.querySelector(".gallery-container");
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

const addBook = document.querySelector(".add-btn");

addBook.addEventListener("click", (e) => {
  if (hasUnfinishedForm) {
    return;
  }
  hasUnfinishedForm  = true
  const form = document.createElement("fieldset");
  form.classList.add("book-form");

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

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const description = document.querySelector("#description").value;
    // if (title === "" || author === "") {
    //   alert("Please fill in all fields");
    //   return;
    // }
    const newCard = document.createElement("div");
    for (let i = 0; i < 3; i++) {
      const item = document.createElement("div");
      item.classList.add(`${info[i]}`);
      item.innerHTML = `${eval(info[i])}`;
      newCard.appendChild(item);
    }

    newCard.classList.add("card-container");
    gallery.appendChild(newCard);
    const book = new Book(title, author, description);
    myLibrary.push(book);
    const form = document.querySelector("fieldset");
    form.remove();
    hasUnfinishedForm = false;
  });
});
