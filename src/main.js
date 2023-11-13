import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const components = import.meta.globEager('./components/*.vue');
const app = createApp(App)
const pinia = createPinia() 
pinia.use(( {store} ) => {
  store.router = markRaw(router)
})

app.use(router)
app.use(pinia)
Object.entries(components).forEach(([path, component]) => {
    app.component(path.split('/').pop().replace(/\.\w+$/, ''), component.default);
  });
app.mount('#app')
