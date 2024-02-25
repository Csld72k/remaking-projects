export function SoundUtils() {

  const forestSound = new Audio("../sounds/forest.wav")
  // const rainSound = new Audio("../sounds/rain.wav")
  // const coffeeShopSound = new Audio("../sounds/coffee-shop.wav")
  // const bonfireSound = new Audio("../sounds/bonfire.wav")

  function play(card) {
    console.log(`${card.classList[1]}Sound`)
    card = `${card.classList[1]}Sound`
    card.play()
  }

  function pause(card) {
  }

  return { play, pause }
}