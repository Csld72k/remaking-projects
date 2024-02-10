let inputWeight = document.querySelector("#inputWeight")
let inputHeight = document.querySelector("#inputHeight")
let buttonCalculate = document.querySelector("#calculate")
let buttonCloseModal = document.querySelector("#closeModal")

buttonCalculate.addEventListener("click", calculateBMI)

function checkIfTheInputsAreFilledIn() {
  return (inputWeight.value.length > 0 && inputHeight.value.length > 0)
}