/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { myPlugins } from './plugins/myPlugins'
import { dateFormatterPlugin } from './plugins/formatDate'
import { registerPlugins } from './plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(dateFormatterPlugin)
app.use(myPlugins, { color: 'red' })
registerPlugins(app)

app.mount('#app')
