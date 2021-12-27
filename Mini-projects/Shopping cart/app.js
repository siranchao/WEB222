// GLOBAL VARIABLES
let pants = 1

// -------
// event handler functions
// -------
const minusButtonPressed = () => {
    console.log("- button pressed")

    // prevent the user from selecting a negative value
    if (pants == 0) {
        console.log("Sorry, you cannot go into the negative values")
        // exit the function
        document.querySelector("#btn-minus").disabled = true
        return
    }
    // if pants > 0, then proceed by decreasing the amount & outputting to the screen
    pants--

    // increase the quantity of pants
    // update the UI to reflect that change
    console.log("Pants quantity: " + pants)
    document.querySelector("span").innerText = pants
    
    // update the extended price
    document.querySelector("#extended-price").innerText = `$${(pants * 4.99).toFixed(2)}`
}

const plusButtonPressed = () => {
    console.log("+ button pressed")

    let minusButton = document.querySelector("#btn-minus")
    if (minusButton.disabled === true)  minusButton.disabled = false
    
    pants++

    console.log("Pants quantity: " + pants)
    document.querySelector("span").innerText = pants

    // update the extended price
    document.querySelector("#extended-price").innerText = `$${(pants * 4.99).toFixed(2)}`
}

const calculateButtonPressed = () => {
    // 1a. Get the subtotal & output
    let subtotalFromUI = document.querySelector("#extended-price").innerText;

    // 1b. Remove the $ symbol from the value that you got in the UI
    subtotalFromUI = subtotalFromUI.substring(1)
    console.log("Subtotal: " + subtotalFromUI)
    console.log(typeof(subtotalFromUI))

    // 1c. Convert the subtotal to a number so we can do math with it
    let subtotal = parseFloat(subtotalFromUI)


    // 2. Calculate the tax & output
    let tax = subtotal * 0.13

    // 3. Calculate the final total & output to screen
    let finalTotal = subtotal + tax
    
    console.log(`SubTotal ${subtotal}`)
    console.log(`SubTotal ${tax}`)
    console.log(`SubTotal ${finalTotal}`)

    // 4. output everything to the screen
    document.querySelector("#subtotal").innerText = `${subtotal.toFixed(2)}`
    document.querySelector("#tax").innerText = `${tax.toFixed(2)}`
    document.querySelector("#total").innerText = `${finalTotal.toFixed(2)}`
}

const couponLinkPressed = (event) => {
    console.log("link pressed")    
    event.preventDefault()

    // when the person clicks the link, show that entire coupon ui
    // .add() .remove() .toggle()

    document.querySelector("#coupon-ui").classList.toggle("hidden")
}

const applyCoupon = () => {
    let total = document.querySelector("#total").innerText
    document.querySelector("#total").innerText = `${(total * 0.85).toFixed(2)}`
    document.querySelector("#coupon-ui .btn").disabled = true
}


// -------
// event listeners
// -------
document.querySelector("#btn-minus").addEventListener("click", minusButtonPressed)
document.querySelector("#btn-plus").addEventListener("click", plusButtonPressed)
document.querySelector("#btn-calculate").addEventListener("click", calculateButtonPressed)
document.querySelector("#coupon-link").addEventListener("click", couponLinkPressed)
document.querySelector("#coupon-ui .btn").addEventListener("click", applyCoupon)
