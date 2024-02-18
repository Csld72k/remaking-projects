import { Elements } from "./elements.js"

const { html, icon, lightModeClass, darkModeClass } = Elements

export function ToggleTheme() {
  html.classList.toggle("light")
  html.classList.contains("light") ? icon.classList = lightModeClass : icon.classList = darkModeClass
}