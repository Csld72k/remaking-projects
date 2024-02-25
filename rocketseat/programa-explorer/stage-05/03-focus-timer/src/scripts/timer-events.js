export function TimerEvents(toggleTheme, timerControls, buttonToggleTheme, buttonPlay, buttonPause, buttonPlus, buttonMinus, buttonStop, buttonChangeTime, buttonSetTime, modalInputMinutes, modalInputSeconds, verifyIfInputIsAllowed) {

  buttonToggleTheme.addEventListener("click", toggleTheme)

  buttonPlay.addEventListener("click", timerControls.play)

  buttonPause.addEventListener("click", timerControls.pause)

  buttonPlus.addEventListener("click", timerControls.plus)

  buttonMinus.addEventListener("click", timerControls.minus)

  buttonStop.addEventListener("click", timerControls.stop)

  buttonChangeTime.addEventListener("click", timerControls.handleModalSetTime)

  buttonSetTime.addEventListener("click", timerControls.setNewTime)

  modalInputMinutes.addEventListener("input", verifyIfInputIsAllowed)

  modalInputSeconds.addEventListener("input", verifyIfInputIsAllowed)
}