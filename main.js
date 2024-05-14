// let container = document.createElement("div")
// let currentRow = document.querySelector(".row")

// container.classList.add("container")


// document.querySelector("body").appendChild(container)


// for (let i = 0; i < 16; i++) {
//     let divRow = document.createElement("div")
//     divRow.classList.add("row")
//     document.querySelector(".container").appendChild(divRow)

//     for (let i = 0; i < 16; i++) {
//     let divColumn = document.createElement("div")
//     divColumn.classList.add("cell")
//     divRow.appendChild(divColumn)


//     }
// }


// document.querySelectorAll(".cell").forEach(x => x.addEventListener("mouseover", () => x.classList.add("green")))

// document.querySelector("button").addEventListener("click", removeGrid)

// function removeGrid() {
//     let gridNumber = prompt("How many blocks wide/long would you like your new grid to be?")
//     document.querySelectorAll(".row").forEach(x => x.remove())
    
//     for (let i = 0; i < gridNumber; i++) {
//     let divRow = document.createElement("div")
//     divRow.classList.add("row")
//     document.querySelector(".container").appendChild(divRow)

//     for (let i = 0; i < gridNumber; i++) {
//     let divColumn = document.createElement("div")
//     divColumn.classList.add("cell")
//     divRow.appendChild(divColumn)


//      }
//     }
//     document.querySelectorAll(".column").forEach(x => x.addEventListener("mouseover", () => x.classList.add("green")))

// }

    const gridContainer = document.querySelector(".grid-container")
    gridContainer.innerHTML = ""

    const totalCells = 64

    const flexBasis = 100 / Math.max(8)

    for (let i=0; i<64; i++) {
        const cell = document.createElement("div")
        cell.classList.add("grid-cell")
        cell.style.flexBasis = flexBasis + "%"
        gridContainer.appendChild(cell)
    }
document.querySelectorAll(".grid-cell").forEach(x => x.addEventListener("click", () => x.classList.add("green")))

document.querySelector("button").addEventListener("click", createGrid)

function createGrid() {
    let size = prompt ("Enter a number 1-100 to create a grid: ")
    let roundedSize = Math.round(size)
    console.log(roundedSize)
    if (roundedSize >=1 && roundedSize <=100) {
    const gridContainer = document.querySelector(".grid-container")
    gridContainer.innerHTML = ""

    const totalCells = roundedSize * roundedSize

    const flexBasis = 100 / Math.max(roundedSize)

    for (let i=0; i<totalCells; i++) {
        const cell = document.createElement("div")
        cell.classList.add("grid-cell")
        cell.style.flexBasis = flexBasis + "%"
        gridContainer.appendChild(cell)
    }
    document.querySelectorAll(".grid-cell").forEach(x => x.addEventListener("click", () => x.classList.add("green")))
    document.querySelectorAll(".grid-cell").forEach(x => x.addEventListener("mousedown", () => x.classList.add("green")))
    }
    else {
        alert("Error, improper input!")
    }
}




