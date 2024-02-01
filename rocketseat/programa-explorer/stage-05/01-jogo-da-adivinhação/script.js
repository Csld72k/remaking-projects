let gameScreen = document.querySelector(".gameScreen")
let winScreen = document.querySelector(".winScreen")
// let inputNumber = document.querySelector("#inputNumber")
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
  formContainer.style.animation = "incorrectAttemptsAnimation .2s 0s 6 alternate linear none"
  setTimeout(() => { formContainer.style.animation = "" }, 1200)
}

function verifyIfAnswerMatch(Event) {
  Event.preventDefault()
  let chosenNumber = document.querySelector("#inputNumber").value

  if (chosenNumber.length === 0) return incorrectAttempts()

  attempts++

  if (Number(chosenNumber) === randomNumber) {
    let winText = document.querySelector(".winScreen h1")
    console.log(attempts)

    attempts === 1 ? winText.innerHTML = `You got it right in ${attempts} try!` : winText.innerHTML = `You got it right in ${attempts} tries!`
    toggleScreen()
  }
  else incorrectAttempts()
}

function newGame() {
  attempts = 0
  document.querySelector("#inputNumber").value = ""
  randomNumber = generateRandomNumber()
  toggleScreen()
}

function eventToPrevent(event) {
  event.preventDefault()
}

buttonTry.addEventListener("click", verifyIfAnswerMatch)
buttonPlayAgain.addEventListener("click", newGame)
