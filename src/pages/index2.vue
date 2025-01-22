<template>
  <!-- Basic Store Structure 21Jan2025 Tuesday -->
  <v-container>
    <v-row>
      <v-col>
        <div>Count: {{ store.count }}</div>
        <div>Double: {{ store.doubleCount }}</div>
        <v-btn @click="store.increment">Increment</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- State Management2 -->
  <!-- <v-container>
    <div>{{ name }} is {{ age }} years old</div>
    <v-btn @click="store.haveBirthday">Have Birthday</v-btn>
  </v-container> -->
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>
