<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useMainStore } from '@/store/main'

const { locale } = useI18n()
const mainStore = useMainStore()
const theme = mainStore.theme
mainStore.setTheme(theme)

locale.value = mainStore.savedLocale
</script>

<style>
body {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
