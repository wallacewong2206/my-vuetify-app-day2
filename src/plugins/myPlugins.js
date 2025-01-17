export const myPlugins = {
  install: (app, options) => {
    app.config.globalProperties.$myGlobalMethod = () => {
      console.log('This is a global method')
    }

    app.directive('my-directive', {
      mounted(el) {
        el.style.color = options.color || 'blue'
      },
    })
  },
}
