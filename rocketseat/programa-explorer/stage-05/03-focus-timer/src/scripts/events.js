import { Elements } from "./elements.js";
import { ToggleTheme } from "./toggle-theme.js"

const { buttonToggleTheme } = Elements

export function Events() {
  buttonToggleTheme.addEventListener("click", ToggleTheme)
}