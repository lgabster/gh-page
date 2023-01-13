<template>
  <nav class="z-50 fixed w-screen h-16 top-0 bg-white dark:bg-primary" :class="[{ 'shadow-lg': solid && scrollAmount }]"
    :style="{ '--tw-bg-opacity': scrollAmount / 100 }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center" :class="[solid ? 'text-blue dark:text-white' : 'text-white']">
          <router-link class="h-8 w-8 mr-8" :to="localePath('/')">
            <NavariumLogo class="h-8" />
          </router-link>
          <div class="hidden md:block">
            <nuxt-link to="/#services" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.services')}}</nuxt-link>
            <nuxt-link to="/references" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.references')}}</nuxt-link>
            <nuxt-link to="/#contact" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.contact')}}</nuxt-link>
          </div>
        </div>
        <ThemeToggler class="ml-auto mr-2" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']" />
        <LocaleDropdown/>
        <div class="-mr-2 flex md:hidden">
          <button @click="() => mainStore.toggleMenu(!mainStore.isMenuOpen)"
            type="button"
            class="ml-2 inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-blue dark:text-white"
            :class="[solid ? 'text-primary' : 'text-white']"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!mainStore.isMenuOpen" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" fill="currentColor" />
            </svg>
            <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" class="bg-white md:hidden">
      <div v-if="mainStore.isMenuOpen" class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/#services" class="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.services')}}</router-link>
        <router-link to="/references" class="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.references')}}</router-link>
        <router-link to="/#contact" class="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.contact')}}</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {  computed } from 'vue'
import { useMainStore } from '@/store/main'
import NavariumLogo from '@/assets/images/navarium.svg'

const mainStore = useMainStore()

const props = defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  },

  scrollAmount: {
    type: Number,
    default: 0
  }
})

const solid =  computed(() => {
  return !mainStore.canNavbarToggle || props.isScrolled
})
</script>
