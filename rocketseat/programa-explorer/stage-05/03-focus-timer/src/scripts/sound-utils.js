export function SoundUtils() {

  const forestSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/forest.wav?raw=true")
  const rainSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/rain.mp3?raw=true")
  const coffeeShopSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/coffee-shop.wav?raw=true")
  const bonfireSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/bonfire.wav?raw=true")
  const endOfTimeSound = new Audio("https://github.com/Csld72k/remaking-projects/blob/main/rocketseat/programa-explorer/stage-05/03-focus-timer/src/sounds/end-timer-sound.mp3?raw=true")

  forestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  bonfireSound.loop = true
  forestSound.volume = .5
  rainSound.volume = .5
  coffeeShopSound.volume = .5
  bonfireSound.volume = .5
  endOfTimeSound.volume = .2

  function stopAllSounds() {

    forestSound.pause()
    rainSound.pause()
    coffeeShopSound.pause()
    bonfireSound.pause()
    endOfTimeSound.play()

  }

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

    let cardName = card.classList[1]

    switch (cardName) {

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

  function changeVolumeLevel(inputRangeID, newVolume) {

    switch (inputRangeID) {

      case "forest-volume": forestSound.volume = newVolume
        break
      case "rain-volume": rainSound.volume = newVolume
        break
      case "coffee-shop-volume": coffeeShopSound.volume = newVolume
        break
      case "bonfire-volume": bonfireSound.volume = newVolume
        break
    }
  }

  return { stopAllSounds, playSound, pauseSound, changeVolumeLevel }
}