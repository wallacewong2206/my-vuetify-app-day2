<template>
  <v-text-field
    :label="label"
    outlined
    clearable
    :modelValue="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keydown.enter="$emit('added')"
  ></v-text-field>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue', 'added'])
</script>
