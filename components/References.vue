<template>
  <section id="references" class="py-12 bg-white dark:bg-primary" :class="{ 'h-screen': isReferencePage }">
    <div class="container mx-auto px-4">
      <h1 class="h1 text-4xl font-medium mb-8 text-center">{{$t('section.references.title')}}</h1>
      <div class="grid grid-cols-3 gap-8">
        <router-link v-for="reference in references" :to="localePath(reference._path.slice(3))" :key="reference._id">
          <article class="flex flex-col prose max-w-full overflow-hidden rounded-lg shadow-lg dark:text-white pb-4">
            <img v-if="reference.images?.length" :src="reference.images[0]" class="mb-4 h-48 w-auto object-cover">
            <NavariumLogo v-else class="mb-4 p-4 h-48" />
            <h1 class="text-2xl px-2 mb-2 dark:text-white">
              {{ reference.title }}
            </h1>
            <p class="text-sm px-2 m-0 dark:text-white">
              {{ reference.description }}
            </p>
          </article>
        </router-link>
      </div>
      <router-link v-if="!isReferencePage" class="block mt-16 text-center" :to="localePath('/references')">{{$t('section.references.all')}}</router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import NavariumLogo from '@/assets/images/navarium.svg'

const { locale } = useI18n()
const route = useRoute()

const isReferencePage = computed(() => {
  return route.path.includes('references')
})

const { data: references, refresh } = await useAsyncData('references', () => {
  return queryContent(`/${locale.value}/references`).limit(isReferencePage ? 0 : 3).find()
})

watch(() => locale.value, () => refresh())
</script>
