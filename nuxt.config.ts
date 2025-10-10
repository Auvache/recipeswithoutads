// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @import "@/scss/toolbox/_variables.scss";
            @import "@/scss/mixins/_responsive-breakpoints.scss";
            @import "@/scss/mixins/_prefixes.scss";
            @import "@/scss/mixins/_fluid-props.scss";
            @import "@/scss/mixins/_flex-props.scss";
            @import "@/scss/mixins/_font-sizes.scss";
            @import "@/scss/mixins/_layout.scss";
          `
        }
      }
    }
  },

  compatibilityDate: '2025-02-11'
})