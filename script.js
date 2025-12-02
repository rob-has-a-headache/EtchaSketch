const body = document.querySelector("body")
const Container = document.getElementById("container")
const hc = "blueviolet";
const dc = "red"
const btn = document.querySelector("button")
//get width and height
//take a number from 1 to 100
/*
multiply by itself - to get total squares
divide 100 by number provided to get % width and height
*/ 
let boxes = 256
let totalSquares = 256
let dimensions = 100

btn.addEventListener("click", (e)=>{
   boxes = prompt("Enter a number between 1 and 100")
   totalSquares = boxes * boxes;
   dimensions = 100/boxes
   console.log(`num entered = ${boxes} total squares = ${totalSquares} - dimensions = ${dimensions}`)
   document.querySelectorAll("box").
})



function createdBoxes(){
    for (let index = 0; index < boxes; index++) {
        const div = document.createElement("div")
        div.classList.add("box")
        div.setAttribute("id", index)
        div.style.backgroundColor = dc
        div.addEventListener("mouseover",(e)=>{
            div.style.backgroundColor = hc
        })
        // div.addEventListener("mouseout",(e)=>{
        //     div.style.backgroundColor = hc
        // })
        Container.appendChild(div) 
    }
}

createdBoxes()

