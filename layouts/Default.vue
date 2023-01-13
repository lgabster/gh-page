<template>
  <Navbar :isScrolled="isScrolled" :scrollAmount="scrollAmount"/>
  <main class="text-gray-700 dark:text-gray-50">
    <slot />
  </main>
  <Contact class="relative z-10" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const scrollAmount = ref(0)

const throttle = (fn, delay) => {
  let timeoutID = null
  return () => {
    timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      fn()
    }, delay)
  }
}

const handleScroll = () => {
  isScrolled.value = (window.scrollY || window.scrollTop) > 80
  scrollAmount.value = 10 * Math.round(window.scrollY / 20)
  if (scrollAmount.value >= 100) { scrollAmount.value = 100 }
}

onMounted(() => {
  window.addEventListener('scroll', throttle(handleScroll, 100), { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
