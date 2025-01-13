<!-- Interpolation -->
<template>
  <p>{{ message }}</p>
  <p>{{ 2 * 2 }}</p>
  <p>{{ user.name }}</p>

  <!-- Binding Syntax -->
  <a href="link.url">{{ link.text }}</a>

  <!-- Directives: v-if and v-else -->
  <p v-if="isLoggedIn">Welcome back!</p>
  <p v-else>Please log in.</p>

  <!-- Directives: v-for -->
  <ul>
    <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
  </ul>

  <!-- Reactivity Fundamentals -->
  <v-btn @click="counter++">Click me</v-btn>
  <p>You clicked {{ counter }} times.</p>

  <!-- Computed Properties -->
  <button @click="counter++">Click me</button>
  <p>Counter: {{ counter }}</p>
  <p>Double: {{ doubleCounter }}</p>
</template>

<script setup>
// Interpolation
const message = 'Hello Vue 3!'
const user = { name: 'John Doe' }

// Binding Syntax
const link = ref({ url: 'https://google.com/', text: 'Google' })

// Directives: v-if and v-else
const isLoggedIn = ref(false)

// Directives: v-for
const fruits = ['Apple', 'Banana', 'Cherry']

// Reactivity Fundamentals
// const counter = ref(0)

// Computed Properties
const counter = ref(0)
const doubleCounter = computed(() => counter.value * 2)
</script>

<!-- Understanding <script> and <script setup> -->
<!-- <script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
}
</script>

<script setup>
import { ref } from 'vue'
const message = ref('Hello Vue!')
</script> -->
