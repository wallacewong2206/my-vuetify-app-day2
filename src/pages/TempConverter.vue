<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Temperature Converter</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="celsius"
          label="Celsius"
          type="number"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="fahrenheit"
          label="Fahrenheit"
          type="number"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-alert v-if="lastConverted" type="info" text>
          Last converted: {{ lastConverted }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const celsius = ref(0)
const fahrenheit = ref(32)
const lastConverted = ref('')

watch(celsius, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fahrenheit.value = Number(((newValue * 9) / 5 + 32).toFixed(2))
    lastConverted.value = 'Celsius to Fahrenheit'
  }
})

watch(fahrenheit, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    celsius.value = Number((((newValue - 32) * 5) / 9).toFixed(2))
    lastConverted.value = 'Fahrenheit to Celsius'
  }
})
</script>
