/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import {VueAxios , axios} from './axios'
import i18n from './i18n'
// import VueApexCharts from "vue3-apexcharts";
// import VueAos from './VueAos'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueAxios , axios)
    .use(i18n)
    // .use(VueApexCharts)
    // .use(VueAos)
}
