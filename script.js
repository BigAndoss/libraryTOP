const myLibrary = [];

function Book(title, author, pages, read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () =>{
         return `${title} by ${author}, ${pages} pages, ${read}`
    } 
}

// const book = new Book(1,"a", 200, "not read yet");
// console.log(book.info());

// console.log(tableBody)
let id = 1;




// function addBookToLibrary (){
//     // const book1 = new Book(
//     //     prompt("Title"),
//     //     prompt("Author"),
//     //     prompt("pages"),
//     //     prompt("Read it yet?")
//     // )

//     // const boo

//     let row = document.createElement("tr")

//     let bookID = document.createElement("td")
//     bookID.innerHTML = `${id}`
//     id++;
//     let bookTitle = document.createElement("td")
//     let bookAuthor = document.createElement("td")
//     let bookPages = document.createElement("td")
//     let bookRead = document.createElement("td")
//     let delet = document.createElement("td")
//     let del = document.createElement("button")

//     del.innerText = 'Delete'
//     del.addEventListener("click",()=>{
//         row.remove()
//         id--
//     })


//     bookTitle.innerHTML = prompt("Title")
//     bookAuthor.innerHTML = prompt("Author")
//     bookPages.innerHTML = prompt("pages")
//     bookRead.innerHTML = prompt("Read it yet?")

//     row.appendChild(bookID)
//     row.appendChild(bookTitle)
//     row.appendChild(bookAuthor)
//     row.appendChild(bookPages)
//     row.appendChild(bookRead)
//     delet.appendChild(del)
//     row.appendChild(delet)

//     document.querySelector("tbody").appendChild(row)


//     // myLibrary.push(book1)
// }
// addBookToLibrary()

function addBookToLibrary(){
    const book = new Book(
        title = prompt("title"),
        author = prompt("author"),
        pages = prompt("page"),
        read = prompt("Read it yet?"),
    )
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

    myLibrary.push(book)
    document.querySelector("tbody").appendChild(row)

}

function check() {
    let a = prompt("array");
    console.log(myLibrary[a].info())
}


const showBtn = document.querySelector("#showBtn")
const dlg = document.querySelector('dialog');
const closeBtn = document.querySelector("#clsBtn")
const btn = document.querySelector("#add")

showBtn.addEventListener('click',()=>{
    dlg.showModal()
})
closeBtn.addEventListener('click',()=>{
    dlg.preventDefault()
    dlg.close()
})
btn.addEventListener('click',()=>{
    addBookToLibrary();
    // dlg.preventDefault()
})