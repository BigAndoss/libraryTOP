const myLibrary = [];
let id = 1;

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () =>{
        return `${title} by ${author}, ${pages} pages, ${read}`
    } 
}

function addBookToLibrary(){
    const book = new Book(
        title = prompt("title"),
        author = prompt("author"),
        pages = prompt("page"),
        read = prompt("Read it yet?"),
    )
    myLibrary.push(book)    
}

function showBook(){
    let table = document.querySelector("tbody")
    table.innerHTML='';
    id = 1;
    myLibrary.forEach(book => {
        
        let row = document.createElement("tr")
        
        let bookID = document.createElement("td")
        bookID.innerHTML = `${id}`
        id++;
        let bookTitle = document.createElement("td")
        let bookAuthor = document.createElement("td")
        let bookPages = document.createElement("td")
        let bookRead = document.createElement("td")
        let info = document.createElement("td")
        
        bookTitle.innerText = book.title
        console.log(book.title)
        bookAuthor.innerText = book.author
        bookPages.innerText = book.pages
        bookRead.innerText = book.read
        info.innerHTML = book.info()
        
        row.appendChild(bookID)
        row.appendChild(bookTitle)
        row.appendChild(bookAuthor)
        row.appendChild(bookPages)
        row.appendChild(bookRead)

        row.appendChild(info)
        table.appendChild(row)
    });
}

function check() {
    let a = prompt("array");
    console.log(myLibrary[a].info())
}

const showBtn = document.querySelector("#showBtn")
const dlg = document.querySelector('dialog');
const closeBtn = document.querySelector("#clsBtn")
const btn = document.querySelector("#add")
const showAll = document.querySelector('#showAllBtn')

showBtn.addEventListener('click',()=>{
    dlg.showModal()
})
closeBtn.addEventListener('click',dlg.close())
// dlg.preventDefault()
// closeBtn.preventDefault();
btn.addEventListener('click',()=>{
    addBook()
    // btn.preventDefault();
    // addBookToLibrary()
    // showBook()
})
showAll.addEventListener('click',()=>{
    showBook()
})

function addBook(){
    const book = new Book(
        title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        pages = document.querySelector("#pages").value,
        document.querySelector("#read").checked? read = "Yes": read ="No",
    )
    myLibrary.push(book)    
    console.log(book.info())
}