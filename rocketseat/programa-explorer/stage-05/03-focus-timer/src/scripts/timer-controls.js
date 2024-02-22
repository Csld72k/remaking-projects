// import { Elements } from "./elements.js"

// const { buttonPlay, inputMinutes, inputSeconds, modalSetTime } = Elements

export function TimerControls(utils, buttonPlay, inputMinutes, inputSeconds, modalSetTime) {

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
    utils.incrementMinutes()
    utils.toggleButtonMinusDisabledEnabled()
  }

  function minus() {
    utils.decrementMinutes()
    utils.toggleButtonMinusDisabledEnabled()
  }

  function stop() {
    utils.pauseTimer()
    utils.disableButton(buttonPlay)
    utils.updateTime("00", "00")
  }

  function handleModalSetTime() {
    utils.resetModalInputs()
    utils.toggleOnOffModalSetTime()
  }

  function setNewTime() {
    utils.setTime()
    utils.toggleOnOffModalSetTime()
  }

  return { play, pause, plus, minus, stop, handleModalSetTime, setNewTime }
}