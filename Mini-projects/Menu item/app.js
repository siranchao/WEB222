const orderlist = []
let payment = 0

const btnPress = (e) => {
    let price = 0
    let product = 0
    if (e.target.tagName.toLowerCase() === "button") {
        product = e.currentTarget.querySelector(".product").innerText
        price = parseFloat(e.currentTarget.querySelector("span").innerText)
    }
    if (product != 0) {
        orderlist.push(product)
        payment += price
    }
    console.log(orderlist)
    console.log(payment)
    document.querySelector("#list").innerText = orderlist
    document.querySelector("#pay").innerText = payment.toFixed(2)
}

document.querySelectorAll(".btn-area").forEach((e) => {
    e.addEventListener("click", btnPress)
})



