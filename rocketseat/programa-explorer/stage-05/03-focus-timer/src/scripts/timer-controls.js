// import { Elements } from "./elements.js"

// const { buttonPlay, inputMinutes, inputSeconds, modalSetTime } = Elements

export function TimerControls(utils, buttonPlay, inputMinutes, inputSeconds, buttonMinus, modalSetTime) {

  function play() {
    utils.disableButton(buttonPlay)
    utils.countdown()
    utils.toggleControls()
  }

  function pause() {
    utils.pauseTimer()
    utils.toggleControls()
    utils.enableButton(buttonPlay)
  }

  function plus() {
    if (inputMinutes.textContent > 0) utils.updateTime((Number(++inputMinutes.textContent)), (Number(inputSeconds.textContent)))

  }

  function minus() {
    utils.updateTime((Number(--inputMinutes.textContent)), (Number(inputSeconds.textContent)))
  }

  function stop() {
    utils.pauseTimer()
    utils.disableButton(buttonPlay)
    utils.updateTime("00", "00")
  }

  function setTime() {

  }

  return { play, pause, plus, minus, stop, setTime }
}