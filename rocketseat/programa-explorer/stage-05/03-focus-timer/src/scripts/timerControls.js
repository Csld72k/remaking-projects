export function TimerControls({ }) {
  function play(utils) {
    utils.countdown()
  }

  return { play }
}