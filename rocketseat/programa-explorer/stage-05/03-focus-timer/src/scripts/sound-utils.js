export function SoundUtils() {

  const forestSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/forest.wav?raw=true")
  const rainSound = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download")
  const coffeeShopSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/coffee-shop.wav?raw=true")
  const bonfireSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/bonfire.wav?raw=true")

  forestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  bonfireSound.loop = true
  forestSound.volume = 1
  rainSound.volume = 1
  coffeeShopSound.volume = 1
  bonfireSound.volume = 1



  function playSound(card) {

    switch (card.classList[1]) {
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

  function pause(card) {
  }

  return { playSound, pause }
}