// helper function to generate the html
const generateToDoItemHTML = (itemName) => {
    const htmlForItem = `
        <div class="item">
            <p>${itemName}</p>
            <p>${new Date().toLocaleTimeString()}</p>
            <button class="btn-done">DONE</button>
            <hr/>
        </div>
    `
    return htmlForItem
}

const addButtonPressed = () => {
    console.log("ADD BUTTON PRESSED")
    const inputBox = document.querySelector("input")
    console.log(`Person entered: ${inputBox}`)

    const html = generateToDoItemHTML(inputBox.value)
    
    // Append the html to the end of the existing html in the todo-container
    document.querySelector("#todo-container").innerHTML += html

    // clear the text box and prepare for the next input
    inputBox.value = "" 
}

const enterPressed = (e) => {
    console.log(`PRESSED: ${e.keyCode}`)
    if (e.keyCode == "13") {
        console.log("Enter PRESSED")
        const inputBox = document.querySelector("input")
        console.log(`Person entered: ${inputBox}`)
    
        const html = generateToDoItemHTML(inputBox.value)
        document.querySelector("#todo-container").innerHTML += html
    
        inputBox.value = "" 
    }
}



const newButtonPressed = () => {
    console.log("NEW BUTTON PRESSED")
    document.querySelector("#todo-container").innerHTML = ""
}

const containerClicked = (evt) => {
    if (evt.target.classList.contains("btn-done") === true) {
        console.log("Person clicked on the DONE button")

        // get the "item" that belongs to that done button, we wnat to strikeout all the text
        evt.target.parentElement.classList.add("done")
    }
}

// add button
document.querySelector("#btn-add").addEventListener("click", addButtonPressed)
document.querySelector("input").addEventListener("keypress", enterPressed)
// new button
document.querySelector("#btn-new").addEventListener("click", newButtonPressed)

document.querySelector("#todo-container").addEventListener("click", containerClicked)