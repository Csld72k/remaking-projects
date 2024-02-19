const lightModeClass = "ph-bold ph-moon"
const darkModeClass = "ph-bold ph-sun"
const html = document.documentElement
const buttonToggleTheme = document.querySelector(".toggle-light-dark-mode")
const icon = buttonToggleTheme.querySelector("i")
const buttonPlay = document.querySelector(".button-play")
const inputMinutes = document.querySelector(".minutes")
const inputSeconds = document.querySelector(".seconds")

export const Elements = {
  lightModeClass,
  darkModeClass,
  html,
  buttonToggleTheme,
  icon,
  buttonPlay,
  inputMinutes,
  inputSeconds
}