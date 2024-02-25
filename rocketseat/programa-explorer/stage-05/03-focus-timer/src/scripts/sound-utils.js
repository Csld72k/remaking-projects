export function SoundUtils() {

  const forestSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/forest.wav?raw=true")
  const rainSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/rain.mp3?raw=true")
  const coffeeShopSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/coffee-shop.wav?raw=true")
  const bonfireSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/bonfire.wav?raw=true")

  forestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  bonfireSound.loop = true
  forestSound.volume = .5
  rainSound.volume = .5
  coffeeShopSound.volume = .5
  bonfireSound.volume = .5



  function playSound(card) {

    let cardName = card.classList[1]

    switch (cardName) {
      case "forest": forestSound.play()
        break
      case "rain": rainSound.play()
        break
      case "coffee-shop": coffeeShopSound.play()
        break
      case "bonfire": bonfireSound.play()
        break
    }
  }

  function pauseSound(card) {

    switch (card.classList[1]) {
      case "forest": forestSound.pause()
        break
      case "rain": rainSound.pause()
        break
      case "coffee-shop": coffeeShopSound.pause()
        break
      case "bonfire": bonfireSound.pause()
        break
    }
  }

  return { playSound, pauseSound }
}