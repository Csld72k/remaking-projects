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
  /* 

    Aqui vou fazer uma forma de ativar uma animação CSS que indique ao usuário que ele introduziu um resposta incorreta, algo como tremer o botão e colocar ele em vermelho ou algo do tipo.
    !  Ainda vou fazer a animação.
    
  */
}

function verifyIfAnswerMatch() {
  let chosenNumber = document.querySelector("#inputNumber").value

  attempts++

  if (Number(chosenNumber) === randomNumber) toggleScreen()
  else incorrectAttempts()
}

buttonTry.addEventListener("click", verifyIfAnswerMatch)