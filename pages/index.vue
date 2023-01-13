<template>
  <Hero />
  <Introduction class="relative z-10" />
  <Services class="relative z-10" />
  <References class="relative z-10" />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { useMainStore } from '@/store/main'

const { setNavbarToggle } = useMainStore()

onMounted(() => {
  setNavbarToggle(true)
})

onBeforeUnmount(() => {
  setNavbarToggle(false)
})
</script>
