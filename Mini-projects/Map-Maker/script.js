/*****************************************************************************
* WEB222 – Assignment 4
* I declare that this assignment is my own work in accordance with college Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Siran Cao    Student ID: 159235209    Date: 12/11/2021
*****************************************************************************/

//// Global variables ////
const tileList = document.querySelectorAll(".tile")
let currentTile = null


//// Event handler function////
//set game to default state
const setDefault = () => {
    document.querySelector("main").classList.remove("hidden")
    //set current tile
    currentTile = tileList[0]
    //clear select section
    for (let i = 0; i < tileList.length; i++) tileList[i].classList.remove("select")
    tileList[0].classList.add("select")
    //clear map
    const slotList = document.querySelectorAll(".slot")
    for (let i = 0; i < slotList.length; i++) slotList[i].innerHTML = ""
}

//when a tile is pressed 
const selectTile = (e) => {
    const tile = e.target.parentElement
    if(tile.classList.contains("tile")){
        for (let i = 0; i < tileList.length; i++){
            tileList[i].classList.remove("select")
        }
        tile.classList.add("select")
        currentTile = tile
    }
}

//apply a tile to the map
const applyTile = (e) => {
    const myTarget = e.target
    //if current selection is add
    if(!currentTile.classList.contains("remove")){
        if(myTarget.classList.contains("slot")) myTarget.innerHTML = currentTile.innerHTML
    }
    //if current selection is remove
    else{
        if(myTarget.tagName === "IMG")  myTarget.parentElement.innerHTML = ""
    }
}
   

//// Event listener ////
document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to Map Maker")
    tileList[0].classList.add("select")
})

document.querySelector("#map-tiles").addEventListener("click", selectTile)

document.querySelector("#the-map").addEventListener("click", applyTile)

document.querySelector("#btn-renew").addEventListener("click", setDefault)

