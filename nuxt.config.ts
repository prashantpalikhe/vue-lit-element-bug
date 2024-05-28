// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/themes/light.css",
        },
      ],
      script: [
        {
          type: "module",
          src: "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/shoelace-autoloader.js",
        },
      ],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        tag.startsWith("acme-") || tag.startsWith("sl-"),
    },
  },
});
