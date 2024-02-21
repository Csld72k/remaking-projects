import { Elements } from "./elements.js"

const { buttonPlay } = Elements

export function TimerControls(utils) {

  function play() {
    utils.disableButton(buttonPlay)
    utils.countdown()
    utils.toggleControls()
  }


  return { play }
}