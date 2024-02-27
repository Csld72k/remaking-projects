export function SoundEvents(card, soundControls, inputRange) {

  card.forEach(card => card.addEventListener("click", soundControls.handleSoundFunctionality));

  inputRange.forEach(inputRange => inputRange.addEventListener("input", soundControls.handleVolumeFunctionality))
}