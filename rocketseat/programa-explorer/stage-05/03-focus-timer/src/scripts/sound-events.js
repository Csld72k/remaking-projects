export function SoundEvents(card, soundControls, inputRange) {

  card.forEach(element => { element.addEventListener("click", soundControls.handleSoundFunctionality) });


}