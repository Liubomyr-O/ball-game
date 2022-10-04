'use strict'

const ball = document.getElementById("ball")
const net = document.getElementById("net")
let score = 0
button.classList.add("hide")

document.addEventListener("keydown", function (event) {
    jump();
})

let isAlive = setInterval(() => {
    let ballOnTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"))
    let netLeft = parseInt(window.getComputedStyle(net).getPropertyValue("left"))

    if (netLeft < 50 && netLeft > 20 && ballOnTop >= 135) {
        let result = score;
        score = 0
        button.classList.remove("hide")
        button.classList.add("buttonIsAviable")
        stopGame()
        alert(`Game over! Your result - ${result}`)
    }
   
}, 10)


function jump() {
    if (ball.classList != "jump") {
        ball.classList.add("jump")
    }
    
    let netLeft = parseInt(window.getComputedStyle(net).getPropertyValue("left"))

    if (netLeft <= 230 ) {
        score +=1
    }

    setTimeout(function () {
        ball.classList.remove("jump")
    }, 600)
}

function stopGame() {

    if (net.classList !== "hide") {
        ball.classList.add("hide")
        net.classList.add("hide")
    }

}