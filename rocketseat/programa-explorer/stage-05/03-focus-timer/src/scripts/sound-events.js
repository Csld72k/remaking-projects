export function SoundEvents(soundControls, forestCard, rainCard, coffeeShopCard, bonfireCard) {

  forestCard.addEventListener("click", soundControls.handleFunctionality)

  rainCard.addEventListener("click", soundControls.handleFunctionality)

  coffeeShopCard.addEventListener("click", soundControls.handleFunctionality)

  bonfireCard.addEventListener("click", soundControls.handleFunctionality)
}