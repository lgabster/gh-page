<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
    >
      <img :src="getFlagUrl($i18n.locale)" alt="Locale flag" class="object-cover h-full w-full" />
    </button>
    <button
      v-show="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
    ></button>
    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
    >
      <button
        v-for="locale in locales"
        :key="locale"
        class="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-primary hover:text-white disabled:opacity-50"
        @click="
          (ev) => {
            selectLocale(locale);
          }
        "
        :disabled="$i18n.locale === locale"
      >
        <div class="mr-2 h-8 w-8 rounded-full overflow-hidden border border-gray-400">
          <img :src="getFlagUrl(locale)" alt="Locale flag" class="object-cover h-full w-full" />
        </div>
        {{ $t(`lang.${locale}`) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

const { setLocale } = useI18n()
const handleEscape = (e) => {
  if (e.key === 'Esc' || e.key === 'Escape') {
    isOpen.value = false
  }
}

const flagUrls = ref({})

onMounted(async () => {
  if (process.client) {
    document.addEventListener('keydown', handleEscape)
  }
  await getFlagUrls()
})
onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('keydown', handleEscape)
  }
})

const isOpen = ref(false)
const locales = ['hu', 'en', 'de', 'it']

const getFlagUrls = async () => {
  const hu = await import(/* @vite-ignore */ '../assets/images/flags/hu.svg?url')
  const en = await import(/* @vite-ignore */ '../assets/images/flags/en.svg?url')
  const it = await import(/* @vite-ignore */ '../assets/images/flags/it.svg?url')
  const de = await import(/* @vite-ignore */ '../assets/images/flags/de.svg?url')
  flagUrls.value = {
    hu: hu.default,
    en: en.default,
    it: it.default,
    de: de.default
  }
}

const getFlagUrl = locale => {
  return flagUrls.value[locale]
}

const selectLocale = newLocale => {
  mainStore.setLocale(newLocale)
  setLocale(newLocale)
  isOpen.value = false
}
</script>
