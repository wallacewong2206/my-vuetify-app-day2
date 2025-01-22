import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import router from './router' // if you have vue router
// import vuetify from './plugins/vuetify'; // <---- Removing this import
import highlight from './directives/highlight.js'
import taskPriority from './plugins/taskPriority.js'

const vuetify = createVuetify({
  components,
  directives,
})
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.directive('highlight', highlight)
app.use(taskPriority)

app.use(pinia)
app.use(vuetify)
app.mount('#app')
