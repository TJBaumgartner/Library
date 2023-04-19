function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        //console.log(this.title + 'by' + this.author, this.pages, this.read);
        return this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read;
    }
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
//theHobbit.info();
function displayInfo() {
    console.log(theHobbit.info());
}
displayInfo();