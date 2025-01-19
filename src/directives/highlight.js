export default {
  beforeMount(el, binding) {
    if (binding.value) {
      el.style.color = 'green'
    } else {
      el.style.color = 'black'
    }
  },
  updated(el, binding) {
    if (binding.value) {
      el.style.color = 'green'
    } else {
      el.style.color = 'black'
    }
  },
}
