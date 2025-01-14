<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Temperature Converter</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="celsius"
          label="Celsius"
          type="number"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
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
        <v-alert type="info" icon="$info"
          >Last converted: {{ lastConversion }}</v-alert
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'

const celsius = ref(0)
const fahrenheit = ref(32)
const lastConversion = ref('None')
let conversionOrigin = null

function isConversionOrigin(origin) {
  if (conversionOrigin === origin) return false
  conversionOrigin = origin
  return true
}

function convertToFahrenheit(celsiusValue) {
  return (celsiusValue * 9) / 5 + 32
}

function convertToCelsius(fahrenheitValue) {
  return ((fahrenheitValue - 32) * 5) / 9
}

watch(celsius, (newVal) => {
  if (isConversionOrigin('celsius')) {
    fahrenheit.value = convertToFahrenheit(newVal)
    lastConversion.value = 'Celsius to Fahrenheit'
  }
})

watch(fahrenheit, (newVal) => {
  if (isConversionOrigin('fahrenheit')) {
    celsius.value = convertToCelsius(newVal)
    lastConversion.value = 'Fahrenheit to Celsius'
  }
})
</script>
