import { ref } from "vue"

function updateHtmlClass(dark: boolean) {
  const body = document.body
  body.classList.toggle("dark", dark)
}

const isDarkMode = ref(localStorage.getItem("darkMode") === "true")
updateHtmlClass(isDarkMode.value)

export function useDarkMode() {
  const toggleDark = (value?: boolean) => {
    const next = typeof value === "boolean" ? value : !isDarkMode.value
    isDarkMode.value = next
    localStorage.setItem("darkMode", next ? "true" : "false")
    updateHtmlClass(next)
  }

  return {
    isDarkMode,
    toggleDark,
  }
}
