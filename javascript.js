const submitButton = document.querySelector('[data-submit]');
const displayFormButton = document.getElementById('showForm');
const cardGrid = document.getElementById('cardGrid');
const formContainer = document.getElementById('formContainer');


displayFormButton.addEventListener('click', displayForm);
function displayForm() {
    formContainer.classList.remove('formHide');
    //displayFormButton.classList.add('formHide');
}
function hideForm() {
    formContainer.classList.add('formHide');
    //displayFormButton.classList.remove('formHide');
}
//Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//Library Array
let myLibrary = [
    {
        title: "Harry Potter",
        author: "J.K Rowling",
        pages: 100,
        read: false
    }
];
submitButton.addEventListener('click', addBookToLibrary);
function addBookToLibrary(e) {
    
    let title = document.querySelector('#bookTitle').value;
    let author = document.querySelector('#bookAuthor').value;
    let pages = document.querySelector('#bookPages').value;
    let read = document.querySelector('#bookRead').value;
    if(document.querySelector('#bookRead').checked == false){
        read = false;
    }
    if(document.querySelector('#bookRead').checked == true){
        read = true;
    }
    if(title == '' || author == ''){
        return;
    }
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBookCard(newBook);
    e.preventDefault();
    resetForm();
    hideForm();
}
function resetForm() {
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#bookAuthor').value = '';
    document.querySelector('#bookPages').value = null;
    document.querySelector('#bookRead').checked = false;
}
function newBookCard(book) {
    let newCard = document.createElement('div');
    newCard.className = 'card';
    let titleCard = document.createElement('h2');
    let authorCard = document.createElement('h2');
    let pagesCard = document.createElement('h2');
    let readCard = document.createElement('button');
    readCard.textContent = 'Read';
    readCard.className = 'readButton';
    if(book.read == true){
        readCard.classList.add('readButtonTrue')
    }
    if(book.read == false){
        readCard.classList.add('readButtonFalse')
    }
    readCard.addEventListener('click', changeIfRead);
    titleCard.textContent = book.title;
    authorCard.textContent = book.author;
    pagesCard.textContent = book.pages + ' Pages';
    newCard.appendChild(authorCard);
    newCard.appendChild(titleCard);
    newCard.appendChild(pagesCard);
    newCard.appendChild(readCard);
    cardGrid.appendChild(newCard);
}
function changeIfRead() {
    if(this.classList.contains('readButtonTrue') == true){
        this.classList.remove('readButtonTrue');
        this.classList.add('readButtonFalse');
        this.textContent = 'Not Read'
        return;
    }
    if(this.classList.contains('readButtonFalse') == true){
        this.classList.remove('readButtonFalse');
        this.classList.add('readButtonTrue');
        this.textContent = 'Read'
        return;
    }
}