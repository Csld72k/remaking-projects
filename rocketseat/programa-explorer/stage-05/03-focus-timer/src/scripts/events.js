import { Elements } from "./elements.js"

const { buttonToggleTheme, buttonPlay, buttonPause, buttonPlus } = Elements

export function Events({ toggleTheme, timerControls, utils }) {

  buttonToggleTheme.addEventListener("click", toggleTheme)

  buttonPlay.addEventListener("click", timerControls.play)

  buttonPause.addEventListener("click", timerControls.pause)

  buttonPlus.addEventListener("click", timerControls.plus)
}