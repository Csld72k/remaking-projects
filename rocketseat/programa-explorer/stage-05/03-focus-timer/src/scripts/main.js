import { Elements } from "./elements.js"
import { ToggleTheme } from "./toggle-theme.js"
import { TimerControls } from "./timerControls.js"
import { Utils } from "./utils.js"
import { Events } from "./events.js"

const {
  lightModeClass,
  darkModeClass,
  html,
  buttonToggleTheme,
  icon,
  buttonPlay,
  inputMinutes,
  inputSeconds
} = Elements

const toggleTheme = ToggleTheme({
  html,
  icon,
  lightModeClass,
  darkModeClass
})

const utils = Utils({ inputMinutes, inputSeconds })

const timerControls = TimerControls({ buttonPlay })

Events({ toggleTheme, timerControls, utils })