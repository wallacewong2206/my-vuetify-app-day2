import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // if you have vue router
import vuetify from './plugins/vuetify'
import highlight from './directives/highlight.js'
import taskPriority from './plugins/taskPriority.js'

const app = createApp(App)

app.use(router) // if you have vue router
app.use(vuetify)
app.directive('highlight', highlight)
app.use(taskPriority)

app.mount('#app')
