let myLibrary = [];
let id = 1;

class Book {
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info(){
        return`${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

function showBook(){
    let table = document.querySelector("tbody")
    table.innerHTML='';
    id = 1;
    myLibrary.forEach(book => {
        // create table 
        let row = document.createElement("tr")
        
        let bookID = document.createElement("td")
        bookID.innerHTML = `${id}`
        let bookTitle = document.createElement("td")
        let bookAuthor = document.createElement("td")
        let bookPages = document.createElement("td")
        let bookRead = document.createElement("td")
        bookRead.setAttribute("id",`read${id}`)
        
        // create edits 
        let deltd = document.createElement("td")
        let del = document.createElement("button")

        let checkBoxTd = document.createElement('td')
        let checkBox = document.createElement('input')
        checkBox.setAttribute("type","checkbox")
        checkBox.setAttribute("class","checkbox")
        checkBox.setAttribute("id",`checkbox${id}`)
        checkBox.setAttribute('onclick',`editBook(${id})`)
        checkBox.checked = book.read ? true : false ; 
        
        let txtDel = document.createTextNode("Delete")
        del.setAttribute("class","del-btn")

        del.setAttribute('onclick',`removeBook(${id})`)
        id++;
        
        // editing the Object 
        bookTitle.innerText = book.title
        bookAuthor.innerText = book.author
        bookPages.innerText = book.pages
        bookRead.innerText = book.read ? 'Yes' : 'No'
        
        // Adding the new object into the table
        row.appendChild(bookID)
        row.appendChild(bookTitle)
        row.appendChild(bookAuthor)
        row.appendChild(bookPages)
        row.appendChild(bookRead)

        checkBoxTd.appendChild(checkBox)
        row.appendChild(checkBoxTd)

        del.appendChild(txtDel)
        deltd.appendChild(del)
        row.appendChild(deltd)
        table.appendChild(row)
    });

}

function addBook(){
    const book = new Book(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        checkBoxInput.checked,
    )
    myLibrary.push(book)  
}

function removeBook(id){
    myLibrary.splice((id-1),1)
    showBook()
}

function editBook(id){
    let check = document.querySelector(`#checkbox${id}`)
    let bookread  = document.querySelector(`#read${id}`);

    check.checked ? myLibrary[id-1].read = true : myLibrary[id-1].read = false;  
    bookread.innerText = myLibrary[id-1].read ? 'Yes' : 'No'
}


const btn = document.querySelector("#add")
const dlg = document.querySelector('dialog');
const closeBtn = document.querySelector("#clsBtn")
const add = document.querySelector("#addBook")

btn.addEventListener('click',()=>{
    dlg.showModal()
})
closeBtn.addEventListener('click',()=>{
    dlg.close()
    clear()
})

let inputField = document.querySelectorAll('input'); //input inside dialog @addBook()
let checkBoxInput = document.querySelector('#read'); //checkbox inside dialog @addBook()
function clear(){ //clear values for the next entry @addBook()
    inputField.forEach(input =>{
        input.value=''
        checkBoxInput.checked = false
    })
}

add.addEventListener('click',()=>{ //checking for empty values inside dialog @addBook()

    if(inputField[0].value !== ''
    && inputField[1].value !== ''
    && inputField[2].value !== ''){
        addBook()
        clear()
        showBook()
    }else {
        clear()
        alert('All fields need to be filled')
    }
})