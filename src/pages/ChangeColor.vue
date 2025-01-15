<!-- Template Refs -->
<!-- <template>
  <input ref="inputField" type="text" />
  <v-btn @click="focusInput">Focus Input</v-btn>
</template>

<script setup>
const inputField = ref(null)

const focusInput = () => {
  inputField.value?.focus()
}
</script> -->

<template>
  <v-card :style="cardStyle" class="pa-4 ma-5">
    <v-card-title :style="{ color: textColor }"> Colorful Card </v-card-title>
    <v-card-text :style="{ color: textColor }">
      This card will change color!
    </v-card-text>
  </v-card>
  <v-btn @click="changeColor" class="mt-4 ma-5">Change Color</v-btn>
</template>

<script setup>
import { ref, computed, vModelCheckbox } from 'vue'

const backgroundColor = ref('#000000')

const cardStyle = computed(() => {
  return {
    backgroundColor: backgroundColor.value,
  }
})

const textColor = computed(() => {
  const color = backgroundColor.value.substring(1) // Remove the '#'
  const rgb = parseInt(color, 16) // Convert hex to integer
  const r = (rgb >> 16) & 0xff // Extract red
  const g = (rgb >> 8) & 0xff // Extract green
  const b = (rgb >> 0) & 0xff // Extract blue
  const brightness = (r * 299 + g * 587 + b * 114) / 1000 // Calculate brightness
  return brightness > 125 ? '#000000' : '#FFFFFF' // Return black or white based on brightness
})

const changeColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
  backgroundColor.value = '#' + randomColor
}
</script>
