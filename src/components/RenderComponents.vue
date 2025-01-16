<template>
  <!-- Render Function -->
  <component :is="RenderComponent" :title="title"></component>
</template>

<script setup>
// const slots = useSlots()
//
// const RenderComponent = (props, context) => {
//   return h('div', {}, [
//     h('h1', {}, props.title),
//     h('p', {}, slots.default ? slots.default() : ''),
//   ])
// }
//
// defineProps(['title'])

const props = defineProps({
  level: {
    type: Number,
    default: 1,
  },
  class: String,
})

const slots = useSlots()

const RenderComponent = () => {
  return h(
    `h${props.level}`,
    { class: props.class },
    slots.default ? slots.default() : ''
  )
}
</script>
