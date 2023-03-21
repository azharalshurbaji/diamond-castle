/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)

registerPlugins(app)
// AOS animation

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// ? import Vue Apex Charts 
import VueApexCharts from "vue3-apexcharts";
app.use(VueApexCharts);

app.mount('#app')
