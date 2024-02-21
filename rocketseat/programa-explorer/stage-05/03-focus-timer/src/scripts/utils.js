import { Elements } from "./elements.js"

export function Utils(inputMinutes, inputSeconds, timerControls1, timerControls2) {

  const { buttonPlay } = Elements

  let minutes
  let seconds
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
          toggleControls()
        } else {
          minutes--
          seconds = 59
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

  function toggleControls() {
    timerControls1.classList.toggle("hidden")
    timerControls2.classList.toggle("hidden")
  }

  function pauseTimer() {
    clearInterval(timer)
  }

  return { countdown, updateTime, disableButton, enableButton, toggleControls, pauseTimer }
}
