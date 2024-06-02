import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { createPinia } from 'pinia'
import {router} from './router/index'

const Pinia = createPinia()

const app = createApp(App)

app.use(Pinia)
app.use(router)

app.mount("#app")