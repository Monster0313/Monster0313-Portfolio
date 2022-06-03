const ogImage = 'https://i.imgur.com/fLs2y9Y.png'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Monster0313 The Portfolio｜Minfeng 邱旻鋒',
    htmlAttrs: {
      lang: 'zh-tw'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '你好，歡迎來到邱旻鋒的個人網站！我是一名前端工程師，主要使用框架為Vue/Nuxt，可以嘗試新的工作機會。' },
      { hid: 'og:image', property: 'og:image', content: ogImage },
      { hid: 'og:description', name: 'og:description', content: '你好，歡迎來到邱旻鋒的個人網站！我是一名前端工程師，主要使用框架為Vue/Nuxt，可以嘗試新的工作機會。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 8000 // default: 3000
  }
}
