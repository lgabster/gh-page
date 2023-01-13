<template>
  <section id="services" class="py-12 bg-white dark:bg-primary">
    <div class="container mx-auto px-4">
      <h1 class="h1 text-4xl font-medium mb-8 text-center">{{$t('section.services.title')}}</h1>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <article v-for="service in services" :key="service.id" class="text-left mb-5">
            <h1 class="text-xl text-center mb-8">{{ service[`title_${$i18n.locale}`] }}</h1>

          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [{
  title: 'asd'
}]
</script>

