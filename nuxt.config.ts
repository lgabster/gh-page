import svgLoader from 'vite-svg-loader'
import en from './locales/en'
import hu from './locales/hu'
import it from './locales/it'
import de from './locales/de'

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'service-worker'
  },
  modules: [
    '@nuxt/content',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'no_prefix',
        locales: ['en', 'it', 'de', 'hu'],
        defaultLocale: 'hu',
        vueI18n: {
          legacy: false,
          locale: 'hu',
          messages: {
            en,
            hu,
            it,
            de,
          }
        }
      }
    ],
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component'
      })
    ]
  }
})
