<template>
  <v-card class="pa-4 ma-4">
    <v-card-title> {{ user.name }} </v-card-title>
    <v-card-text> {{ user.email }} </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  user: Object,
})
</script>

<!-- <template>
  <v-card class="pa-4 ma-4">
    <v-card-title> {{ user }} </v-card-title>
    <v-card-text> {{ email }} </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  user: user,
  email: email,
})
</script> -->
