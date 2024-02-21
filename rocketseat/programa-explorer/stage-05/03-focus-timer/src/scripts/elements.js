const lightModeClass = "ph-bold ph-moon"
const darkModeClass = "ph-bold ph-sun"
const html = document.documentElement
const buttonToggleTheme = document.querySelector(".toggle-light-dark-mode")
const icon = buttonToggleTheme.querySelector("i")
const buttonPlay = document.querySelector(".button-play")
const buttonStop = document.querySelector(".button-stop")
const buttonSetTime = document.querySelector(".button-timer")
const buttonPause = document.querySelector(".button-pause")
const buttonPlus = document.querySelector(".button-plus")
const buttonMinus = document.querySelector(".button-minus")
const inputMinutes = document.querySelector(".minutes")
const inputSeconds = document.querySelector(".seconds")
const timerControls1 = document.querySelector(".icons-1")
const timerControls2 = document.querySelector(".icons-2")

export const Elements = {
  lightModeClass,
  darkModeClass,
  html,
  buttonToggleTheme,
  icon,
  buttonPlay,
  buttonStop,
  buttonSetTime,
  buttonPause,
  buttonPlus,
  buttonMinus,
  inputMinutes,
  inputSeconds,
  timerControls1,
  timerControls2
}