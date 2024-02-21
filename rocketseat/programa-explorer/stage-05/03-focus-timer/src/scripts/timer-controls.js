import { Elements } from "./elements.js"

const { buttonPlay, inputMinutes, inputSeconds } = Elements

export function TimerControls(utils) {

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
    utils.updateTime((Number(inputMinutes.textContent) + 1), (Number(inputSeconds.textContent)))
  }

  function minus() {
    utils.updateTime((Number(--inputMinutes.textContent)), (Number(inputSeconds.textContent)))
  }

  function stop() {
    utils.pauseTimer()
    utils.disableButton(buttonPlay)
    utils.updateTime("00", "00")
  }
  return { play, pause, plus, minus, stop }
}