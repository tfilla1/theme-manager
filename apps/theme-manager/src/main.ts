import './assets/colors.css'
// import './assets/main.css'
import './assets/flex.css'
import './assets/theme.css'
import './assets/warble.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
