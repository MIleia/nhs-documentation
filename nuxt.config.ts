// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-21',
  devtools: { enabled: true },
  
  // Configuration CSS et modules
  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  
  // Configuration Tailwind
  tailwindcss: {
    cssPath: ['~/assets/css/main.css'],
    configPath: 'tailwind.config.js',
  },

  // Configuration des pages
  pages: true,
  
  // Configuration du routeur
  router: {
    options: {
      strict: false
    }
  },

  // Configuration des composants
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Configuration de l'application
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'NHS Documentation',
      meta: [
        { name: 'description', content: 'Documentation technique et guides pour NHS' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Configuration du serveur de développement
  devServer: {
    port: 3000
  },

  // Configuration TypeScript
  typescript: {
    typeCheck: false
  },

  // Configuration des imports automatiques
  imports: {
    dirs: ['composables/**'],
    global: true
  },

  // Configuration i18n
  i18n: {
    locales: ['fr', 'en', 'zh'],
    defaultLocale: 'fr'
  }
})
