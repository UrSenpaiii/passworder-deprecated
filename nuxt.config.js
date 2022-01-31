export default {
  head: {
    title: 'Passworder',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css'}
    ],
    script: [
      {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'}
    ]
  },

  css: ["@/assets/scss/main"],
  components: true,

  modules: [
    ['@nuxtjs/axios', {
      baseURL: 'http://localhost:8080/api'
    }],
    ['@nuxtjs/auth-next', {
      strategies: {
        local: {
          scheme: 'refresh',
          token: {
            property: 'access_token',
            maxAge: 60 * 60,
            global: true,
            type: ''
          },
          refreshToken: {
            property: 'refresh_token',
            data: 'refresh_token',
            maxAge: 60 * 60 * 24 * 30
          },
          user: {
            property: false,
          },
          endpoints: {
            login: {url: '/auth/login', method: 'post'},
            refresh: {url: '/auth/refresh', method: 'post'},
            user: {url: '/auth/user', method: 'get'},
            logout: {url: '/auth/logout', method: 'post'}
          }
        }
      },
    }],
    ['@nuxtjs/i18n', {
      locales: [
        {code: 'en', name: "English", file: 'en.json'},
        {code: 'ru', name: "Russian", file: 'ru.json'}
      ],
      langDir: "locals",
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
      },
      detectBrowserLanguage: {
        alwaysRedirect: true
      }
    }],
    ['@nuxtjs/pwa', {
      manifest: {
        lang: 'en'
      }
    }]
  ],

  env: {
    scheme: "https",
    domain: "passworder.com",
    name: "Passworder.com",
  }
}
