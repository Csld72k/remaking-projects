const lightModeClass = "ph-bold ph-moon"
const darkModeClass = "ph-bold ph-sun"
const html = document.documentElement
const buttonToggleTheme = document.querySelector(".toggle-light-dark-mode")
const icon = buttonToggleTheme.querySelector("i")
const buttonPlay = document.querySelector(".button-play")
const buttonStop = document.querySelector(".button-stop")
const buttonChangeTime = document.querySelector(".button-timer")
const buttonPause = document.querySelector(".button-pause")
const buttonPlus = document.querySelector(".button-plus")
const buttonMinus = document.querySelector(".button-minus")
const inputMinutes = document.querySelector(".minutes")
const inputSeconds = document.querySelector(".seconds")
const timerControls1 = document.querySelector(".icons-1")
const timerControls2 = document.querySelector(".icons-2")
const modalSetTime = document.querySelector(".modal-set-time")
const buttonSetTime = document.querySelector(".input-container > button")
const modalInputMinutes = document.querySelector("#minutes-to-set")
const modalInputSeconds = document.querySelector("#seconds-to-set")
const card = document.querySelectorAll(".card")
const forestCard = document.querySelector(".forest")
const rainCard = document.querySelector(".rain")
const coffeeShopCard = document.querySelector(".coffee-shop")
const bonfireCard = document.querySelector(".bonfire")

export const Elements = {
  lightModeClass,
  darkModeClass,
  html,
  buttonToggleTheme,
  icon,
  buttonPlay,
  buttonStop,
  buttonChangeTime,
  buttonPause,
  buttonPlus,
  buttonMinus,
  inputMinutes,
  inputSeconds,
  timerControls1,
  timerControls2,
  modalSetTime,
  buttonSetTime,
  modalInputMinutes,
  modalInputSeconds,
  card,
  forestCard,
  rainCard,
  coffeeShopCard,
  bonfireCard
}