export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Watsons',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@400;700&display=swap", rel:"stylesheet"},
      {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@400;700&family=Rubik:wght@700&display=swap", rel:"stylesheet"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-carousel.js', mode: 'client' }],


  // Auto import components: https://go.nuxtjs.dev/config-components 
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/fontawesome',]
  ],

  fontawesome: {
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
