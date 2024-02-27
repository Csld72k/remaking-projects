export function SoundControls(soundUtils, card) {
  function endOfTimeSound() {
    soundUtils.stopAllSounds()
    card.forEach(card => card.classList.toggle("selected"));
  }

  function handleSoundFunctionality(event) {

    let card = this
    let cardSVG = this.querySelector("svg")
    let cardSVGPath = this.querySelector("svg path")
    let inputRange = this.querySelector(".input-range")

    if ((event.target == card || event.target == cardSVG || event.target == cardSVGPath) && event.target !== inputRange) {

      this.classList.toggle("selected")

      if (this.classList.contains("selected")) soundUtils.playSound(this)
      else soundUtils.pauseSound(this)
    }
  }

  function handleVolumeFunctionality() {

    let newVolume = this.value / 10

    soundUtils.changeVolumeLevel(this.id, newVolume)
  }

  return { endOfTimeSound, handleSoundFunctionality, handleVolumeFunctionality }
}