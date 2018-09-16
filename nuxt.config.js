module.exports = {
  env: {
  },
  mode: 'spa',
  head: {
    title: 'Pokerloge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Skagenfood' },
      { hid: 'author', name: 'author', content: 'Skagenfood' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Skagenfood' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload', href: '/fonts/abril-fatface-v9-latin-ext_latin-regular.woff2', type: 'font/woff2', as: 'font', crossorigin: 'use-credentials',
      },
    ],
  },
  loading: { color: '#00344e' },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'dynamic-routes',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      });
    },
  },
  modules: [
    'nuxt-trailingslash-module',
    '@nuxtjs/pwa',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],
  axios: {
    baseURL: process.env.API_URL,
    logLevel: 'debug',
    proxyHeaders: false,
    credentials: true,
    debug: false,
  },
  build: {
    // Eslint on Save
    vendor: ['svg4everybody', 'axios'],
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
