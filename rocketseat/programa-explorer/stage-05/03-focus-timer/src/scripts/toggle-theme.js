export function ToggleTheme({ html, icon, lightModeClass, darkModeClass }) {
  function handle() {
    html.classList.toggle("light")
    html.classList.contains("light") ? icon.classList = lightModeClass : icon.classList = darkModeClass
  }

  return handle

}