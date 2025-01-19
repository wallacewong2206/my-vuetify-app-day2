export default {
  install(app) {
    app.config.globalProperties.$prioritizeTasks = (tasks) => {
      return tasks.sort((a, b) => b.priority - a.priority)
    }
  },
}
