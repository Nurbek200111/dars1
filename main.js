let row1 = document.querySelector(".row1")
let row2 = document.querySelector(".row2")
console.log(category1);

category1.map(element => {
    let col = document.createElement("div")
    col.classList.add("col")

    
    let elem = document.createElement("div")
    elem.classList.add("elem")

    let a = document.createElement("a")
    a.href = "#"
    // a.style.border = "1px solid black"
    a.style.backgroundColor = "rgb(171, 171, 171)"
    a.style.padding = " 5px 10px"
    a.style.borderRadius = "15px"
    a.style.textDecoration = "none"
    a.style.color = "blue   "
    a.style.fontSize = "20px"


    a.textContent = element.category
    
    
    elem.appendChild(a)
    col.appendChild(elem)

    row1.appendChild(col)
})


youtube.map(youtub => {
    let col = document.createElement("div")
    col.classList.add("col-3", "col22")
    col.style.margin = "10px"

    let youtub1 = document.createElement("div")
    youtub1.classList.add("youtub1")

    let edit1 = document.createElement("i")
    edit1.classList.add("fa-solid", "nas", "fa-pen-to-square")

    let delete1 = document.createElement("i")
    delete1.classList.add("fa-solid", "nas","fa-trash-can")

    let p = document.createElement("p")
    p.innerText = youtub.title

    let iframe = document.createElement("iframe")

    iframe.src = youtub.src
    iframe.width = "100%"
    iframe.height = "auto"
    iframe.title = youtub.title

    youtub1.appendChild(iframe)
    youtub1.appendChild(p)
    youtub1.appendChild(edit1)
    youtub1.appendChild(delete1)
    col.appendChild(youtub1)
    row2.appendChild(col)
    
})

b = true
function setting1()
{
    let setting12 = document.querySelector(".setting")
    if(b==true){
        // setting12.style.display = "block"/
        setting12.style.transition = "2s" 
        setting12.style.transform = "translate(20px, 0)"
        
        b = false
    }
    else{
        setting12.style.transition = "2s" 
        setting12.style.transform = "translate(-400px)"
       
        b = true

    }
}










