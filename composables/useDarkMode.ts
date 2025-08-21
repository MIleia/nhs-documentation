import { ref, readonly, onMounted } from 'vue'

export const useDarkMode = () => {
  const isDark = ref(false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateDarkMode()
  }

  const setDarkMode = (value: boolean) => {
    isDark.value = value
    updateDarkMode()
  }

  const updateDarkMode = () => {
    if (process.client) {
      const html = document.documentElement
      if (isDark.value) {
        html.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      } else {
        html.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
      }
    }
  }

  const initDarkMode = () => {
    if (process.client) {
      const savedMode = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedMode === 'true' || (savedMode === null && prefersDark)) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    }
  }

  onMounted(() => {
    initDarkMode()
  })

  return {
    isDark: readonly(isDark),
    toggleDarkMode,
    setDarkMode,
    initDarkMode
  }
}
