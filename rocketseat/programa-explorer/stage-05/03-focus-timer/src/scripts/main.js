import { Elements } from "./elements.js"
import { ToggleTheme } from "./toggle-theme.js"
import { TimerControls } from "./timer-controls.js"
import { Utils } from "./utils.js"
import { Events } from "./events.js"

const {
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
  modalInputSeconds
} = Elements

const toggleTheme = ToggleTheme(
  html,
  icon,
  lightModeClass,
  darkModeClass
)

const utils = Utils(inputMinutes, inputSeconds, timerControls1, timerControls2, buttonMinus, modalSetTime, modalInputMinutes, modalInputSeconds, buttonPlay)

const timerControls = TimerControls(utils, buttonPlay, inputMinutes, inputSeconds, buttonMinus, modalSetTime)

Events(toggleTheme, timerControls, buttonToggleTheme, buttonPlay, buttonPause, buttonPlus, buttonMinus, buttonStop, buttonChangeTime, buttonSetTime)