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
  buttonSetTime,
  buttonPause,
  buttonPlus,
  buttonMinus,
  inputMinutes,
  inputSeconds,
  timerControls1,
  timerControls2
} = Elements

const toggleTheme = ToggleTheme(
  html,
  icon,
  lightModeClass,
  darkModeClass
)

const utils = Utils(inputMinutes, inputSeconds, timerControls1, timerControls2)

const timerControls = TimerControls(utils, buttonPlay, buttonPause)

Events({ toggleTheme, timerControls, utils })