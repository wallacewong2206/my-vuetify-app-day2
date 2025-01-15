<template>
  <v-list-item class="align-center">
    <v-row align="center" justify="space-between">
      <v-checkbox
        :modelValue="task?.completed"
        @update:modelValue="$emit('toggle')"
        hide-details
        class="ml-1"
        color="success"
      />
      <v-list-item-content>
        <v-list-item-title
          :class="{
            'text-success': task?.completed,
            'text-decoration-line-through': task?.completed,
          }"
        >
          {{ task?.text }}
        </v-list-item-title>
      </v-list-item-content>
      <v-btn
        icon
        color="error"
        @click="$emit('remove')"
        aria-label="Delete Task"
        class="ma-4"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-row>
  </v-list-item>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  task: {
    type: Object,
    required: true,
  },
})

defineEmits(['remove', 'toggle'])
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
