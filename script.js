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
        // let bookRead = document.createElement("td")
        let deltd = document.createElement("td")
        let del = document.createElement("button")
        let txtDel = document.createTextNode("Delete")
        del.setAttribute("class","del-btn")
        bookTitle.innerText = book.title
        bookAuthor.innerText = book.author
        bookPages.innerText = book.pages
        // bookRead.innerText = book.read
        // info.innerHTML = book.info()
        
        row.appendChild(bookID)
        row.appendChild(bookTitle)
        row.appendChild(bookAuthor)
        row.appendChild(bookPages)
        // row.appendChild(bookRead)

        // row.appendChild(info)
        del.appendChild(txtDel)
        deltd.appendChild(del)
        row.appendChild(deltd)
        table.appendChild(row)
    });
}




function addBook(){
    const book = new Book(
        title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        pages = document.querySelector("#pages").value,
        // document.querySelector("#read").checked? read = "Yes": read ="No",
    )
    myLibrary.push(book)  
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


let inputField = document.querySelectorAll('input');
function clear(){
    inputField.forEach(input =>{
        input.value=''
    })
}

add.addEventListener('click',()=>{
    
        // inputField.forEach(input=>{
        //     if(input.value==='') 
        //     else{
        //                 // enableBtn(add)
        //                 addBook()
        //                 clear()
        //                 dlg.close()
        //                 showBook()
        //     }
        // })

    if(inputField[0].value !== ''
    && inputField[1].value !== ''
    && inputField[2].value !== ''){
        addBook()
        clear()
        showBook()
    }else alert('All fields need to be filled')
    
})

