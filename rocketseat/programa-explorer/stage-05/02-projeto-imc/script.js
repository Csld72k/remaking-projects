let inputWeight = document.querySelector("#inputWeight")
let inputHeight = document.querySelector("#inputHeight")
let BMIResultMessage = document.querySelector(".modal h1")
let modal = document.querySelector(".modal")
let buttonCalculate = document.querySelector("#calculate")
let buttonCloseModal = document.querySelector("#closeModal")

buttonCalculate.addEventListener("click", calculateBMI)
buttonCloseModal.addEventListener("click", showModalOnOff)
inputWeight.addEventListener("input", disableButtonCalculateIfAnyInputEmpty)
inputHeight.addEventListener("input", disableButtonCalculateIfAnyInputEmpty)

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
}

function showModalOnOff() {
  modal.classList.toggle("hidden")
}

function disableButtonCalculateIfAnyInputEmpty() {
  if (checkIfTheInputsAreFilledIn() && inputWeight.value != 0 && inputHeight.value != 0) {
    buttonCalculate.disabled = false
    buttonCalculate.classList.remove("disabled")
  } else {
    buttonCalculate.disabled = true
    buttonCalculate.classList.add("disabled")
  }
}