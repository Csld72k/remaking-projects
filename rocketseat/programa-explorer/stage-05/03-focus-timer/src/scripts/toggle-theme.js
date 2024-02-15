let lightModeClass = "ph-bold ph-moon"
let darkModeClass = "ph-bold ph-sun"
let html = document.documentElement
let buttonToggleTheme = document.querySelector(".toggle-light-dark-mode")
let icon = buttonToggleTheme.querySelector("i")

buttonToggleTheme.addEventListener("click", () => {
  html.classList.toggle("light")
  html.classList.contains("light") ? icon.classList = lightModeClass : icon.classList = darkModeClass
})