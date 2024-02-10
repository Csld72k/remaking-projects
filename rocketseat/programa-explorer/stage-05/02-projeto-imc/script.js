let inputWeight = document.querySelector("#inputWeight")
let inputHeight = document.querySelector("#inputHeight")
let BMIResultMessage = document.querySelector(".modal h1")
let modal = document.querySelector(".modal")
let buttonCalculate = document.querySelector("#calculate")
let buttonCloseModal = document.querySelector("#closeModal")

buttonCalculate.addEventListener("click", calculateBMI)

function checkIfTheInputsAreFilledIn() {
  return (inputWeight.value.length > 0 && inputHeight.value.length > 0)
}

function calculateBMI(event) {
  event.preventDefault()

  if (checkIfTheInputsAreFilledIn()) {
    let BMI = (inputWeight.value / ((inputHeight.value / 100) ** 2)).toFixed(1)
    BMIResultMessage.innerText = `Your BMI is ${BMI}`
    showModalOnOff()
  }
  else showError()
}

function showModalOnOff() {
  modal.classList.toggle("disabled")
}