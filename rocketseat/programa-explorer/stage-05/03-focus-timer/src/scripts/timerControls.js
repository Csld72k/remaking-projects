import { Elements } from "./elements.js"

const { buttonPlay } = Elements

export function TimerControls({ }) {

  function play(utils) {
    utils.disableButton(buttonPlay)
    utils.countdown()
  }

  return { play }
}