let deleteAll = document.querySelector(".delete_all")
clear.addEventListener('click', () => {
    adder.value = ""
})

adder_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const chislo = new Date();

    if (adder.value.replace(/ /g, "") !== '') {
        const item = document.createElement("div")
        const text = document.createElement("p")
        const container2 = document.createElement("div")
        const container = document.createElement("div")
        const box1 = document.createElement("button")
        const box2 = document.createElement("button")
        const box3 = document.createElement("button")
        const box4 = document.createElement("button")
        item.appendChild(container2)
        container2.appendChild(text)
        container2.style = "height:50%; width:100%;overflow:auto;"
        text.appendChild(document.createTextNode(adder.value));

        collection.appendChild(item)


        item.appendChild(container)
        container.style = "height:50%;width:100%;display:flex; justify-content:space-between;"
        container.appendChild(box1)
        container.appendChild(box2)
        container.appendChild(box3)
        container.appendChild(box4)
        box1.style = "height:75%;width:33%;background:rgb(16, 187, 16);border-radius:10px;display:flex;font-size:22px;align-items:center;justify-content:space-evenly; color:white;border:none;"
        box1.innerHTML = '<i id="tick" class="fa-solid fa-circle-check"></i> <p>Complete</p>'
        box1.innerHTML.style = "text-align:center"

        box2.style = "margin-left: 20px; height:75%;width:27%;background:gold;border-radius:10px;display:flex;font-size:22px;align-items:center;justify-content:space-evenly; color:white;border:none;"
        box2.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> <p>Edit</p>'
        box2.innerHTML.style = "text-align:center"

        box3.style = "height:75%;width:27%;margin-left: 20px; background:red;border-radius:10px;display:flex;font-size:22px;align-items:center;justify-content:space-evenly; color:white;border:none;"
        box3.innerHTML = '<i class="fa-solid fa-trash"></i> <p>Delete</p>'
        box3.innerHTML.style = "text-align:center"


        box4.style = "margin-left: 20px; height:75%;width:27%;background:purple;border-radius:10px;display:flex;font-size:22px;align-items:center;border:none;justify-content:space-evenly; color:white;"
        box4.innerHTML = '<i class="fa-solid fa-clock"></i> ' + chislo.getHours() + ":" + chislo.getMinutes();
        box4.innerHTML.style = "text-align:center"

        box3.addEventListener('click', () => {
            item.remove();
        })

        box1.addEventListener('click', () => {
            container2.firstChild.classList.toggle("containerPAcrive")
        })

        box2.addEventListener('click', () => {
            if (text.hasAttribute("contenteditable")) {
                text.removeAttribute("contenteditable")
                text.style.border = "none"
            } else {
                text.setAttribute("contenteditable", true)
            }
        })
        adder.value = ''
    }
})


deleteAll.addEventListener('click', () => {
    while (collection.firstChild) {
        collection.removeChild(collection.firstChild)
    }
})

// important 