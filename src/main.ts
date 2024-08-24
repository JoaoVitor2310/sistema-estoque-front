import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JavaScript do Bootstrap
// import "dist/css/tabulator.min.css";
// import "dist/js/tabulator.min.js";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
