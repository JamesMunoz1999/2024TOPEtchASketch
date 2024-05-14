let container = document.createElement("div")
let currentRow = document.querySelector(".row")

container.classList.add("container")


document.querySelector("body").appendChild(container)


for (let i = 0; i < 16; i++) {
    let divRow = document.createElement("div")
    divRow.classList.add("row")
    document.querySelector(".container").appendChild(divRow)

    for (let i = 0; i < 16; i++) {
    let divColumn = document.createElement("div")
    divColumn.classList.add("cell")
    divRow.appendChild(divColumn)


    }
}


document.querySelectorAll(".cell").forEach(x => x.addEventListener("mouseover", () => x.classList.add("green")))

document.querySelector("button").addEventListener("click", removeGrid)

function removeGrid() {
    let gridNumber = prompt("How many blocks wide/long would you like your new grid to be?")
    document.querySelectorAll(".row").forEach(x => x.remove())
    
    for (let i = 0; i < gridNumber; i++) {
    let divRow = document.createElement("div")
    divRow.classList.add("row")
    document.querySelector(".container").appendChild(divRow)

    for (let i = 0; i < gridNumber; i++) {
    let divColumn = document.createElement("div")
    divColumn.classList.add("cell")
    divRow.appendChild(divColumn)


     }
    }
    document.querySelectorAll(".column").forEach(x => x.addEventListener("mouseover", () => x.classList.add("green")))
}

