let gameScreen = document.querySelector(".gameScreen")
let winScreen = document.querySelector(".winScreen")
// let inputNumber = document.querySelector("#inputNumber")
let buttonTry = document.querySelector("#buttonTry")
let randomNumber, attempts

function generateRandomNumber() {
  return randomNumber = Math.round(Math.random() * 10)
}

randomNumber = generateRandomNumber()

console.log(randomNumber)

function incorrectAttempts() {
  let formContainer = document.querySelector(".container")
  formContainer.style.animation = "incorrectAttemptsAnimation .2s 0s 6 alternate linear none"
  setTimeout(() => { formContainer.style.animation = "" }, 1200)
}

function verifyIfAnswerMatch() {
  let chosenNumber = document.querySelector("#inputNumber").value

  attempts++

  if (Number(chosenNumber) === randomNumber) toggleScreen()
  else incorrectAttempts()
}

buttonTry.addEventListener("click", verifyIfAnswerMatch)