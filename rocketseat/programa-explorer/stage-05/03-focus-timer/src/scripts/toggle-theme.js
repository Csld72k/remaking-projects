buttonToggleTheme.addEventListener("click", toggleTheme)

function toggleTheme() {
  html.classList.toggle("light")
  html.classList.contains("light") ? icon.classList = lightModeClass : icon.classList = darkModeClass
}