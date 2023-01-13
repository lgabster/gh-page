<template>
  <div class="min-h-screen w-screen bg-white dark:bg-primary">
    <article v-if="article.title" class="container prose mx-auto py-20 dark:text-white">
      <header class="flex flex-col">
        <h1 class="text-6xl text-medium dark:text-white mb-2">
          {{ article.title }}
        </h1>
        <p class="text-sm">
          {{ article.date}}
        </p>
      </header>

      <ContentRenderer :value="article" />

      <div v-if="article.images?.length" class="flex flex-wrap">
        <img v-for="image in article.images" :key="image" :src="image">
      </div>
    </article>
    <div v-else class="container prose mx-auto py-20">
      <p class="dark:text-white">
        {{ $t('error.NO_CONTENT') }}
      </p>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const { path, params } = useRoute()

const { data: article, refresh } = await useAsyncData('references', async () => {
  return await queryContent(`/${locale.value}/references`, params.slug).findOne()
})

watch(() => locale.value, () => {
  refresh()
})
</script>
