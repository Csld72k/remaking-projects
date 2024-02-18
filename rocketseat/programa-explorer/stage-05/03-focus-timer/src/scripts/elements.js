const lightModeClass = "ph-bold ph-moon"
const darkModeClass = "ph-bold ph-sun"
const html = document.documentElement
const buttonToggleTheme = document.querySelector(".toggle-light-dark-mode")
const icon = buttonToggleTheme.querySelector("i")
const buttonPlay = document.querySelector(".button-play")

export const Elements = {
  lightModeClass,
  darkModeClass,
  html,
  buttonToggleTheme,
  icon,
  buttonPlay
}