import { ref, readonly, onMounted } from 'vue'

export const useTheme = () => {
  const isDark = ref(false)

  // Initialize theme on mount
  const initTheme = () => {
    if (process.client) {
      try {
        const savedTheme = localStorage.getItem('pref-theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
          isDark.value = true
          document.documentElement.classList.add('dark')
        } else {
          isDark.value = false
          document.documentElement.classList.remove('dark')
        }
      } catch (error) {
        console.warn('Error initializing theme:', error)
        // Fallback to light theme
        isDark.value = false
        document.documentElement.classList.remove('dark')
      }
    }
  }

  // Toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
      try {
        document.documentElement.classList.toggle('dark', isDark.value)
        localStorage.setItem('pref-theme', isDark.value ? 'dark' : 'light')
      } catch (error) {
        console.warn('Error toggling theme:', error)
      }
    }
  }

  // Set specific theme
  const setTheme = (theme: 'light' | 'dark') => {
    isDark.value = theme === 'dark'
    
    if (process.client) {
      try {
        document.documentElement.classList.toggle('dark', isDark.value)
        localStorage.setItem('pref-theme', theme)
      } catch (error) {
        console.warn('Error setting theme:', error)
      }
    }
  }

  return {
    isDark: readonly(isDark),
    initTheme,
    toggleTheme,
    setTheme
  }
}
