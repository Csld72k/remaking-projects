export function Utils({ inputMinutes, inputSeconds }) {
  let minutes = Number(inputMinutes.textContent)
  let seconds = Number(inputSeconds.textContent)
  let timer
  function countdown() {

    timer = setInterval(() => {

      minutes = Number(inputMinutes.textContent)
      seconds = Number(inputSeconds.textContent)

      console.log(minutes)
      console.log(seconds)
      console.log(timer)

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer)
        } else {
          minutes--
          seconds = 59
        }

      } else {
        seconds--
      }

      updateTime(minutes, seconds)

    }, 500)

    timer
  }

  function updateTime(minutes, seconds) {
    inputMinutes.innerText = String(minutes).padStart(2, "0")
    inputSeconds.innerText = String(seconds).padStart(2, "0")
  }

  return { countdown }
}