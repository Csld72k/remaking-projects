// import { Elements } from "./elements.js"

// const { buttonPlay, inputMinutes, inputSeconds, modalSetTime } = Elements

export function TimerControls(utils, buttonPlay, inputMinutes, inputSeconds, buttonMinus, modalSetTime, modalInputMinutes, modalInputSeconds) {

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

    // Aqui preciso criar uma regex para aceitar apenas entradas numéricas positivas e criar também uma animação de erro ao digitar um dado fora do aceitável

    utils.setTime()
    utils.toggleOnOffModalSetTime()
  }

  return { play, pause, plus, minus, stop, handleModalSetTime, setNewTime }
}