import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

type Theme = 'light' | 'night'
type Locale = 'hu' | 'en' | ' it' | 'de'

export const useMainStore = defineStore('main', () => {
  const isMenuOpen = ref(false)
  const theme = useLocalStorage('theme', 'dark')
  const savedLocale = useLocalStorage('locale', 'hu')
  const canNavbarToggle = ref(false)

  const setLocale = (locale: Locale) => {
    savedLocale.value = locale
  }

  const setTheme = (newTheme: string) => {
    theme.value = <Theme>newTheme
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  }

  const toggleMenu = (status = null) => {
    isMenuOpen.value = status !== null ? status : !isMenuOpen.value
  }

  const setNavbarToggle = (state: boolean) => {
    canNavbarToggle.value = state
  }

  return {
    isMenuOpen,
    theme,
    canNavbarToggle,
    savedLocale,
    setLocale,
    setTheme,
    toggleMenu,
    setNavbarToggle
  }
})
