export function SoundControls(soundUtils) {
  function endOfTimeSound() {

  }

  function handleFunctionality() {
    this.classList.toggle("selected")
    // let card = this
    // console.log(card)
    // soundUtils.playPauseSound(this)

    if (this.classList.contains("selected")) soundUtils.play(this)
    else soundUtils.pause(this)


  }

  return { endOfTimeSound, handleFunctionality }
}