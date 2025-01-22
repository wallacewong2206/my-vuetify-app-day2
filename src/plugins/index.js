/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(pinia)
}

// use routes, nested routes, middleware, nagivation guards,
// repository tree
// src
// -pages
// --index.vue
// --users
// --admin
//
// For Admin Users:
// Full access to view all tasks (completed and pending)
// Can edit any task details
// Can mark tasks as complete
// Can unmark/undo completed tasks
//
// For Regular Users:
// Can view pending tasks only
// Cannot view completed tasks
// Can mark tasks as complete
// Cannot unmark/undo completed tasks
// Cannot edit task details once completed
