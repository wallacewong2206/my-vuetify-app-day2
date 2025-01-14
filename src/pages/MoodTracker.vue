<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 align="center" justify="space-between">Mood Tracker</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-select
          label="How are you feeling?"
          :items="moodOptions"
          v-model="selectedMood"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center" justify="space-between">
        <v-card :style="moodCardStyle">
          <v-card-text class="text-h3" :style="moodTextStyle">
            {{ selectedMood }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const moodOptions = ref(['Happy', 'Angry', 'Hungry'])
const selectedMood = ref('Happy')

const moodCardStyle = computed(() => {
  switch (selectedMood.value) {
    case 'Happy':
      return { backgroundColor: '#fffacd' } // Light Yellow
    case 'Angry':
      return { backgroundColor: '#ffcdd2' } // Light Red
    case 'Hungry':
      return { backgroundColor: '#ffe0b2' } // Light Orange
    default:
      return { backgroundColor: '#fff' } // White
  }
})

const moodTextStyle = computed(() => {
  switch (selectedMood.value) {
    case 'Happy':
      return { color: '#2e7d32' } // Dark green
    case 'Angry':
      return { color: '#b71c1c' } // Dark red
    case 'Hungry':
      return { color: '#e65100' } // Dark orange
    default:
      return { color: 'black' } // Black
  }
})
</script>
