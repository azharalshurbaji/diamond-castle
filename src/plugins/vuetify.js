/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { en , ar } from 'vuetify/locale'
// import { VDataTable } from 'vuetify/labs/VDataTable'



// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // components: {VDataTable},
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en , ar },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        background: '#2a3243',
      },
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          black: '#000000',
        },
      },
    },
  },
})
