// ****************************************************************************
// * WEB222 – Assignment 3
// * I declare that this assignment is my own work in accordance with college Academic Policy.
// * No part of this assignment has been copied manually or electronically from any other source
// * (including web sites) or distributed to other students.
// *
// * Name: Siran Cao    Student ID: 159235209    Date: 11/29/2021
// ****************************************************************************

//// Variables declares ////
const wordList = ["APPLE", "PEACH", "TOMATO", "LEMON", "STRBERRY", "WATERMELON", "AVOCADO"]
let chances = 0
let currentWord = ""
const btnList = document.querySelectorAll(".btn-letter")


//// Helper functions ////
//reset the game
const gameReset = () => {
    //reset chances to 7
    chances = 7
    setChances(7)

    //reset hint
    setHints("")

    //reset a random word
    currentWord = nextWord()
    console.log(`guess: ${currentWord}`)

    // clear and display new space
    let wordHtml = document.querySelector("#word-display") 
    wordHtml.innerHTML = ""
    for (let i = 0; i < currentWord.length; i++) wordHtml.innerHTML += `<span>_</span>`

    //reset the letter board
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].disabled = false
        btnList[i].style.backgroundColor = "#ffc261"
    }
}

//game end all btn disabled
const gameEnd = () => {
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].disabled = true
        btnList[i].style.backgroundColor = "grey"
    }
}

//update the word-display
const updateWord = (letter) => {
    let wordHtml = document.querySelectorAll("#word-display span")
    for (let i = 0; i < wordHtml.length; i++) {
        (currentWord[i]=== letter) && (wordHtml[i].innerText = letter)
    }
}

//check if the guess is complete
const checkComplete = () => {
    correctLetter = 0
    let wordHtml = document.querySelectorAll("#word-display span")
    for (let i = 0; i < wordHtml.length; i++) {
        if (wordHtml[i].innerText !== "_") correctLetter++
    }
    return correctLetter == currentWord.length
}

//return next random word
const nextWord = () => { return wordList[Math.floor(Math.random() * wordList.length)] }

//update chances
const setChances = (chances) => { document.querySelector("#chances span").innerText = chances }

//update hints
const setHints = (hint) => { document.querySelector("#hints").innerText = hint }

//check if contain the letter 
const checkLetter = (word, letter) => {
    res = false
    for (let i = 0; i < word.length && !res; i++) {
        if (word[i] === letter) res = true
    }
    return res;
}


//// Event Handlers ////
//when the start button pressed
const startBtnPressed = () => {
    //show the game session
    setTimeout(() => {
        document.querySelector("#guessing-part").classList.remove("hidden")
        document.querySelector("#letter-part").classList.remove("hidden")
        
        //reset game setting
        gameReset()
    }, 500);
}

//when the letter buttons pressed
const letterBtnPressed = (e) => {
    let myTarget = e.target

    //if the btn is clicked
    if (myTarget.classList.contains("btn-letter")) {
        //check the letter
        if (checkLetter(currentWord, myTarget.innerText)) {
            myTarget.style.backgroundColor = "#009966"
            updateWord(myTarget.innerText)
            setHints("Yep!")

            //if all guess are correct
            if (checkComplete()) {
                setHints("Good Work!")
                alert(`You Win! \nPress START NEW GAME to Play Again`)
                gameEnd() 
            }
        }
        else {
            setChances(--chances)
            myTarget.style.backgroundColor = "#CCCCCC"
            setHints("Oops, wrong letter")

            //if chances run out game over
            if (chances == 0) {
                setHints(`The correct word is: ${currentWord}`)
                alert(`You Lose! \nPress START NEW GAME to Play Again`)
                gameEnd() 
            }
        }
        myTarget.disabled = true
    }
}


//// add event listeners to buttons ////
document.querySelector(".btn-start").addEventListener("click", startBtnPressed)

document.querySelector("#letters").addEventListener("click", letterBtnPressed)

