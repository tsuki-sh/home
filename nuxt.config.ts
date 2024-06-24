export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@unocss/nuxt'],

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  css: ['@unocss/reset/tailwind.css'],

  features: {
    // for UnoCSS
    inlineStyles: false,
  },
});
