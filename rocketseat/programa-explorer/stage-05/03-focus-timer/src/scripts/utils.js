import { Elements } from "./elements.js"

export function Utils({ inputMinutes, inputSeconds }) {

  const { buttonPlay } = Elements

  let minutes = Number(inputMinutes.textContent)
  let seconds = Number(inputSeconds.textContent)
  let timer
  function countdown() {

    timer = setInterval(() => {

      minutes = Number(inputMinutes.textContent)
      seconds = Number(inputSeconds.textContent)

      // console.log(minutes)
      // console.log(seconds)
      // console.log(timer)

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer)
          enableButton(buttonPlay)
        } else {
          minutes--
          seconds = 5
        }

      } else {
        seconds--
      }

      updateTime(minutes, seconds)

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

  return { countdown, updateTime, disableButton, enableButton }
}
