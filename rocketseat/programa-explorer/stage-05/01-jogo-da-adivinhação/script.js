let gameScreen = document.querySelector(".gameScreen")
let winScreen = document.querySelector(".winScreen")
let inputNumber = document.querySelector("#inputNumber")
let buttonTry = document.querySelector("#buttonTry")
let buttonPlayAgain = document.querySelector("#buttonPlayAgain")
let formContainer = document.querySelector(".container")
let randomNumber
let attempts = 0

inputNumber.focus()

buttonTry.addEventListener("click", verifyIfAnswerMatch)
buttonPlayAgain.addEventListener("click", newGame)
document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && gameScreen.classList.contains("disabled")) newGame()
})

function generateRandomNumber() {
  return randomNumber = Math.round(Math.random() * 10)
}

randomNumber = generateRandomNumber()

function toggleScreen() {
  gameScreen.classList.toggle("disabled")
  winScreen.classList.toggle("disabled")
}

function incorrectAttempts() {
  inputNumber.value = ""
  inputNumber.disabled, buttonTry.disabled = true
  inputNumber.readOnly = true
  inputNumber.style.outline = "none"
  formContainer.style.animation = "incorrectAttemptsAnimation .1s 0s 6 alternate linear none"
  setTimeout(() => {
    inputNumber.disabled, buttonTry.disabled = false
    inputNumber.readOnly = false
    formContainer.style.animation = ""
    inputNumber.style.removeProperty("outline")
  }, 600)
}

function verifyIfAnswerMatch(event) {
  event.preventDefault(event)

  let chosenNumber = inputNumber.value

  if (chosenNumber.length === 0) return incorrectAttempts()

  attempts++

  if (Number(chosenNumber) === randomNumber) {
    let winText = document.querySelector(".winScreen h1")
    let tries

    attempts === 1 ? tries = "try" : tries = "tries"
    winText.innerHTML = `You got it right in ${attempts} ${tries}!`

    formContainer.style.animation = ""
    inputNumber.style.removeProperty("outline")

    toggleScreen()
  }
  else incorrectAttempts()
}

function newGame() {
  attempts = 0
  inputNumber.value = ""
  randomNumber = generateRandomNumber()
  toggleScreen()
  buttonTry.disabled = true
  inputNumber.focus()
  setTimeout(() => { buttonTry.disabled = false }, 1)
}