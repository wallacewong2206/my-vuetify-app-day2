<!-- <template>
  <div>
    <span
      v-for="star in maxRating"
      :key="star"
      @click="updateRating(star)"
      style="cursor: pointer"
    >
      <v-icon
        :icon="star <= modelValue ? 'mdi-star' : 'mdi-star-outline'"
        :color="star <= modelValue ? 'yellow' : 'grey'"
      ></v-icon>
    </span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  maxRating: {
    type: Number,
    default: 5,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

const updateRating = (rating) => {
  emit('update:modelValue', rating)
}
</script> -->

<template>
  <v-rating
    v-model="ratingValue"
    :length="maxRating"
    half-increments
    hover
    density="compact"
    @update:modelValue="onRatingChange"
    color="yellow"
  ></v-rating>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  maxRating: {
    type: Number,
    default: 5,
  },
})

const emit = defineEmits(['update:modelValue'])

const ratingValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    ratingValue.value = newVal
  }
)

const onRatingChange = (newRating) => {
  emit('update:modelValue', newRating)
}
</script>
