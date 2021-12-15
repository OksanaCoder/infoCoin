function setLightTheme() {
  document.getElementsByTagName("body")[0].setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
}

function setDarkTheme() {
  document.getElementsByTagName("body")[0].setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
}

export function getDataTheme() {
  return localStorage.getItem("data-theme") ?? 'light';
}

export function setDataTheme(value = 'light') {
  switch (value) {
    case "light":
    case "system":
      setLightTheme();
      break;
    case "dark":
      setDarkTheme();
      break;
    default:
      setLightTheme();
      break;
  }
}
