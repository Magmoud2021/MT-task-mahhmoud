export default {
  server: (function() {
    if (process.env.NODE_ENV !== 'development') {
        return {
            host: String(process.env.SERVER_HOST),
            port: process.env.SERVER_PORT,
        }
    }
})(),
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.HEAD_TITLE,
    base: process.env.API_URL,
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: process.env.META_DESCRIPTION,
        },

    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.META_DESCRIPTION,
    },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css',
        media: 'none',
        onload: "if(media!=='all') media='all'",
    },
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.scss'
  ],
  vue: {
    config: {
        silent: process.env.NODE_ENV !== 'development',
    },
},
axios: { baseURL: process.env.API_URL, proxy: true },
    proxy: { '/api/': process.env.API_URL },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/components/unit',
  
],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  router: {
    linkExactActiveClass: 'exact-active-link',

},
loading: { color: '#13438e', height: '3px' },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', [
      'nuxt-i18n',
      {
          baseUrl: process.env.BASE_URL,
          strategy: 'prefix_except_default',
          detectBrowserLanguage: false,
          locales: [{
                  code: 'en',
                  file: 'en.js',
                  iso: 'en-US',
                  name: 'English',
              },
              {
                  code: 'ar',
                  file: 'ar.js',
                  iso: 'ar-AR',
                  name: 'العربية',
              },
          ],
          lazy: true,
          langDir: 'lang/',
          defaultLocale: 'ar',
          vueI18n: {
              fallbackLocale: 'ar',
          },
      },
  ],

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  publicRuntimeConfig: {
    ENV: process.env.NODE_ENV,
    PROJECT_NAME: process.env.PROJECT_NAME,
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    RISK_API: process.env.RISK_API,
},
privateRuntimeConfig: {
    ID: process.env.ID,
    PASS: process.env.PASS,
},
}
