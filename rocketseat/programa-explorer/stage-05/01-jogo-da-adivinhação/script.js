let gameScreen = document.querySelector(".gameScreen")
let winScreen = document.querySelector(".winScreen")
let form = document.querySelector("form")
let inputNumber = document.querySelector("#inputNumber")
let buttonTry = document.querySelector("#buttonTry")
let buttonPlayAgain = document.querySelector("#buttonPlayAgain")
let randomNumber
let attempts = 0

function generateRandomNumber() {
  return randomNumber = Math.round(Math.random() * 10)
}

randomNumber = generateRandomNumber()

console.log(randomNumber)

function toggleScreen() {
  gameScreen.classList.toggle("disabled")
  winScreen.classList.toggle("disabled")
}

function incorrectAttempts() {
  let formContainer = document.querySelector(".container")

  inputNumber.value = ""
  formContainer.style.animation = "incorrectAttemptsAnimation .2s 0s 6 alternate linear none"
  setTimeout(() => { formContainer.style.animation = "" }, 1200)
}

function verifyIfAnswerMatch(event) {
  event.preventDefault(event)

  // let chosenNumber = document.querySelector("#inputNumber").value
  let chosenNumber = inputNumber.value

  if (chosenNumber.length === 0) return incorrectAttempts()

  attempts++

  if (Number(chosenNumber) === randomNumber) {
    let winText = document.querySelector(".winScreen h1")
    let tries

    attempts === 1 ? tries = "try" : tries = "tries"
    winText.innerHTML = `You got it right in ${attempts} ${tries}!`

    toggleScreen()
  }
  else incorrectAttempts()
}

function newGame() {
  attempts = 0
  // inputNumber.value = ""
  randomNumber = generateRandomNumber()
  console.log(randomNumber)
  toggleScreen()
}

function eventToPrevent(event) {
  event.preventDefault()
}

// form.addEventListener("submit", (event) => event.preventDefault(event))
buttonTry.addEventListener("click", verifyIfAnswerMatch)
buttonPlayAgain.addEventListener("click", newGame)
