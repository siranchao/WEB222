const movieList = [
    {title: "Av Porn", runningTime: 90, price: 19.20},
    {title: "Spiderwoman", runningTime: 105, price: 23.20},
    {title: "Go fuck yourself", runningTime: 95, price: 15.50},
    {title: "We are back", runningTime: 110, price: 29.50},
    {title: "Antwomen", runningTime: 120, price: 10.30}
]
let moviePrice = 0
let seats = 0
let total = 0
const allSeats = document.querySelectorAll(".seat")
allSeats.forEach((ele) => ele.innerText = "E")

// detect when a person clicks on a seat using event delegation
const seatingMapClicked = (evt) => { 
    if (evt.target.classList.contains("seat") === true) {
        console.log("Person clicked on a seat")

        if (evt.target.classList.contains("occupied") === true) {
            console.log("Sorry, that seat is occupied")
            return
        }
        // Update the UI to show if the seat is selected or not.
        // If selected, then unselect the seat.
        // If not selected, then select the seat.
        evt.target.classList.toggle("selected")

        if (evt.target.classList.contains("selected")) {
            evt.target.innerText = "X"
        }

        // calculate how many seats are actually selected
        seats = document.querySelectorAll(".selected").length
        console.log(`Number of selected seats: ${seats}`)

        // based on that number, we can calculate the total price
        total = seats* moviePrice
        console.log(`Total price: ${total}`)

        // update ui
        document.querySelector("#lbl-num-seats").innerText = seats
        document.querySelector("#lbl-total-price").innerText = total.toFixed(2)
    }
}

const buyButtonPressed = () => {
    // Change all the selected seats to "occupied"
    // - get all the selected seats
    // - change its css to be occupied
    const selectedSeats = document.querySelectorAll(".selected")
    for (let i = 0; i < selectedSeats.length; i++) {
        selectedSeats[i].classList.remove("selected")
        selectedSeats[i].classList.add("occupied")
        selectedSeats[i].innerText = "B"
    }
    
    document.querySelector(".hidden").classList.remove("hidden")

    // clear the order summary back to its defaults (num seats = 0, total price = 0)
    document.querySelector("#lbl-num-seats").innerText = 0
    document.querySelector("#lbl-total-price").innerText = 0

}

const cancelButtonPressed = () => {
    seats = 0
    total = 0
    //remove the yellow blocks
    let selectedSeats = document.querySelectorAll(".selected")
    for (let i = 0; i < selectedSeats.length; i++) {
        selectedSeats[i].classList.remove("selected")
    }
    selectedSeats.forEach((ele) => ele.innerText = "E");
    //clear information
    document.querySelector("#lbl-num-seats").innerText = 0
    document.querySelector("#lbl-total-price").innerText = 0
}

const movieSelected = () => {
    moviePrice = document.querySelector("#movieList").value
    console.log(`Movie selected, price is ${moviePrice}`)
    document.querySelector("#moviePrice").innerText = moviePrice

    //reset page
    cancelButtonPressed()
}

const loadingPage = () => {
    console.log(`page loaded complete`)
    for (let i = 0; i < movieList.length; i++) {
        document.querySelector("#movieList").innerHTML += `<option value="${movieList[i].price}">${movieList[i].title}</option>`
    }
}



document.querySelector("#seating-map").addEventListener("click", seatingMapClicked)
document.querySelector("#btn-buy-seats").addEventListener("click", buyButtonPressed)
document.querySelector("#btn-cancel-seats").addEventListener("click", cancelButtonPressed)
document.querySelector("#movieList").addEventListener("input", movieSelected)
document.addEventListener("DOMContentLoaded", loadingPage)