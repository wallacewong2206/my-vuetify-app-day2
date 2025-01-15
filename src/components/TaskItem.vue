<template>
  <v-list-item>
    <v-list-item-title>
      {{ task }}
    </v-list-item-title>
  </v-list-item>
</template>

<script setup>
const props = defineProps({
  task: String,
})
</script>
