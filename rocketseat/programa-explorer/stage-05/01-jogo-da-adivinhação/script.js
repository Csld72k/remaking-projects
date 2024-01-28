let gameScreen = document.querySelector(".gameScreen")
let winScreen = document.querySelector(".winScreen")
let inputNumber = document.querySelector(".inputNumber")
let buttonTry = document.querySelector("#buttonTry")
let randomNumber

function generateRandomNumber() {
  return randomNumber = Math.round(Math.random() * 10)
}

randomNumber = generateRandomNumber()

function verifyIfTheAnswerIsValid() {
  let chosenNumber = inputNumber
  return
}

function verifyIfAnswerMatch() {
  verifyIfTheAnswerIsValid()
}

buttonTry.addEventListener("click", verifyIfAnswerMatch)