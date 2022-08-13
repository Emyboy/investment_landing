export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Meredith Finance - Choose Your Plan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'We have simplified investing by offering the following plans to help our clients earn high yields, build portfolios, and stake their profits for higher returns on investments.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/bootstrap.min.css',
    './assets/css/all.min.css',
    './assets/css/nice-select.css',
    './assets/css/magnific-popup.css',
    // './assets/css/slick.css',
    './assets/css/animate.css',
    './assets/css/line-awesome.min.css',
    './assets/css/odometer.css',
    './assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  target: 'static',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BACKEND_URL,
  },

  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:1337/fake',
    DASHBOARD_URL: process.env.DASHBOARD_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
