import { Elements } from "./elements.js"

export function Utils(inputMinutes, inputSeconds, timerControls1, timerControls2, buttonMinus, modalSetTime, modalInputMinutes, modalInputSeconds, buttonPlay, buttonSetTime) {

  let minutes
  let seconds
  let timer

  function countdown() {

    timer = setInterval(() => {

      minutes = Number(inputMinutes.textContent)
      seconds = Number(inputSeconds.textContent)

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer)
          toggleControls()
        } else {
          --minutes
          seconds = 59
        }

      } else {
        seconds--
      }

      updateTime(minutes, seconds)

      if (minutes == 0) toggleButtonMinusDisabledEnabled()

    }, 500)


  }

  function updateTime(minutes, seconds) {
    inputMinutes.innerText = String(minutes).padStart(2, "0")
    inputSeconds.innerText = String(seconds).padStart(2, "0")
  }

  function disableButton(button) {
    button.disabled = true
  }

  function enableButton(button) {
    button.disabled = false
  }

  function toggleControls() {
    timerControls1.classList.toggle("hidden")
    timerControls2.classList.toggle("hidden")
  }

  function pauseTimer() {
    clearInterval(timer)
  }

  function incrementMinutes() {
    updateTime((Number(inputMinutes.textContent) + 1), (Number(inputSeconds.textContent)))
  }

  function decrementMinutes() {
    if (inputMinutes.textContent > 0) updateTime((Number(inputMinutes.textContent) - 1), (Number(inputSeconds.textContent)))
  }

  function toggleButtonMinusDisabledEnabled() {
    let minutes = Number(inputMinutes.textContent)
    if (minutes < 1 && buttonMinus.disabled == false) disableButton(buttonMinus)
    else if (minutes > 0 && buttonMinus.disabled == true) enableButton(buttonMinus)
  }

  function toggleOnOffModalSetTime() {
    modalSetTime.classList.toggle("disabled")
  }

  function resetModalInputs() {
    modalInputMinutes.value = ""
    modalInputSeconds.value = ""
  }

  function setTime() {
    inputMinutes.innerText = String(modalInputMinutes.value).padStart(2, "0")
    inputSeconds.innerText = String(modalInputSeconds.value).padStart(2, "0")

    if (buttonPlay.disabled == true) enableButton(buttonPlay)

  }

  function verifyIfInputIsAllowed() {
    let minutesIsFilled = modalInputMinutes.value.length > 0 && modalInputMinutes.value.length < 5
    let minutesIsBetweenAcceptedNumbers = modalInputMinutes.value >= 0 && modalInputMinutes.value <= 1440
    let secondsIsFilled = modalInputSeconds.value.length > 0 && modalInputSeconds.value.length < 3
    let secondsIsBetweenAcceptedNumbers = modalInputSeconds.value >= 0 && modalInputSeconds.value <= 60

    if (minutesIsFilled && minutesIsBetweenAcceptedNumbers && secondsIsFilled && secondsIsBetweenAcceptedNumbers) enableButton(buttonSetTime)
    else disableButton(buttonSetTime)
  }

  return { countdown, updateTime, disableButton, enableButton, toggleControls, pauseTimer, toggleButtonMinusDisabledEnabled, incrementMinutes, decrementMinutes, toggleOnOffModalSetTime, resetModalInputs, setTime, verifyIfInputIsAllowed }
}
