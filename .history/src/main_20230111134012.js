import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import Meta from 'vue-meta'
/* import './tools/three.min.js'
import './tools/vanta.topology.min.js' */

createApp(App).use(router).mount('#app').use(Meta)
