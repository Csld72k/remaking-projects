import { Elements } from "./elements.js"

const { buttonToggleTheme, buttonPlay } = Elements

export function Events({ toggleTheme, timerControls, utils }) {

  buttonToggleTheme.addEventListener("click", toggleTheme)

  buttonPlay.addEventListener("click", () => { timerControls.play(utils) })
}