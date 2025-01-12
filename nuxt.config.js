export default defineNuxtConfig({
  head: {
    title: "Passworder",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""},
      {name: "format-detection", content: "telephone=no"}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"},
      {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"}
    ],
    script: [
      {src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}
    ]
  },

  css: ["~/assets/scss/main.scss"],
  components: [{path: "~/components", pathPrefix: false, prefix: "v"}],
  router: {middleware: "auth"},

  modules: [
    ["@nuxtjs/i18n", {
      baseURL: "http://localhost:3000",
      locales: [
        {code: "en", name: "English", file: "en.json"},
        {code: "ru", name: "Russian", file: "ru.json"}
      ],
      langDir: "locals",
      defaultLocale: "en",
      vueI18n: "conf/i18n.js",
      detectBrowserLanguage: {
        alwaysRedirect: true
      }
    }]
    // ["@nuxtjs/pwa", {
    //   manifest: {
    //     lang: "en"
    //   }
    // }]
  ]
})
