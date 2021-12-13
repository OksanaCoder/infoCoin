export function setLightTheme() {
  document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light')
  localStorage.setItem("data-theme", "light");
}

export function setDarkTheme() {
  document.getElementsByTagName('body')[0].setAttribute('data-theme', 'dark')
  localStorage.setItem("data-theme", "dark");
}
