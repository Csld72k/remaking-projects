import { Elements } from "./elements.js"
import { ToggleTheme } from "./toggle-theme.js"
import { TimerControls } from "./timer-controls.js"
import { TimerUtils } from "./timer-utils.js"
import { TimerEvents } from "./timer-events.js"
import { SoundControls } from "./sound-controls.js"
import { SoundUtils } from "./sound-utils.js"
import { SoundEvents } from "./sound-events.js"

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
  modalInputSeconds,
  card,
  forestCard,
  rainCard,
  coffeeShopCard,
  bonfireCard,
  inputRange
} = Elements

const toggleTheme = ToggleTheme(
  html,
  icon,
  lightModeClass,
  darkModeClass
)

const soundUtils = SoundUtils()

const soundControls = SoundControls(soundUtils)

const timerUtils = TimerUtils(inputMinutes, inputSeconds, timerControls1, timerControls2, buttonMinus, modalSetTime, modalInputMinutes, modalInputSeconds, buttonPlay, buttonSetTime, soundControls)

const timerControls = TimerControls(timerUtils, buttonPlay, buttonSetTime)

TimerEvents(toggleTheme, timerControls, buttonToggleTheme, buttonPlay, buttonPause, buttonPlus, buttonMinus, buttonStop, buttonChangeTime, buttonSetTime, modalInputMinutes, modalInputSeconds, timerUtils.verifyIfInputIsAllowed, timerUtils.setTimeByPressingEnter)

SoundEvents(card, soundControls, inputRange)