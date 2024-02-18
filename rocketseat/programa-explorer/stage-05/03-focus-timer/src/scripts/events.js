import { Elements } from "./elements.js"

const { lightModeClass, darkModeClass, html, buttonToggleTheme, icon, buttonPlay } = Elements

export function Events({ toggleTheme, timerControls }) {

  buttonToggleTheme.addEventListener("click", toggleTheme)

  buttonPlay.addEventListener("click", timerControls.play)
}