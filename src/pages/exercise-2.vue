<template>
  <v-container>
    <!-- Buttons -->
    <v-btn color="primary" @click="() => console.log('Button Clicked')">
      Test Button
    </v-btn>

    <!-- Dialog -->
    <v-btn color="primary" @click="dialog = true">Open Dialog</v-btn>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>Dialog Title</v-card-title>
        <v-card-text>Dialog content goes here.</v-card-text>
        <v-card-actions>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Breakpoint and Media Queries -->
    <div class="d-none d-md-block pa-3">Visible only on medium screens and larger</div>
    <div>
      <h1 class="d-none d-sm-block">This heading is visible on small screens and above</h1>
      <p class="d-flex d-sm-block">
        This paragraph is displayed as a flexbox on small screens and as a block on larger screens
      </p>
    </div>

    <!-- Grid -->
    <v-row class="ma-5">
      <v-col cols="12" sm="6" md="4" class="border-lg" align="center" justify="center">
        <div>Column 1</div>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="border-lg" align="center" justify="center">
        <div>Column 2</div>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="border-lg" align="center" justify="center">
        <div>Column 3</div>
      </v-col>
    </v-row>

    <!-- Transitions -->
    <div class="text-center">
      <v-menu transition="fade-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">Fade Transition</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Hello</v-list-item-title>
            <v-list-item-title>World</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Hover -->
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card
          v-bind="props"
          :color="isHovering ? 'primary' : undefined"
          title="Hover over me"
          text="Hello World"
        ></v-card>
      </template>
    </v-hover>

    <!-- Customizing Components -->
    <v-btn class="custom-btn">Custom Button</v-btn>

    <!-- Toggling Dark/Light Mode -->
    <v-btn @click="toggleDarkMode">Toggle Theme</v-btn>

    <!-- Tooltips -->
    <v-btn v-tooltip="Tooltip">Hover me</v-btn>

    <div class="d-flex justify-space-between ga-4 py-10">
      <v-btn v-tooltip:start="'Tooltip at the start'">Start</v-btn>
      <v-btn v-tooltip:end="'Tooltip at the end'">End</v-btn>
      <v-btn v-tooltip:top="'Tooltip at the top'">Top</v-btn>
      <v-btn v-tooltip:bottom="'Tooltip at the bottom'">Bottom</v-btn>
      <v-btn v-tooltip:bottom-end="'Tooltip at the bottom end'">Bottom end</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<script setup>
import { useTheme } from 'vuetify';
import { Tooltip } from 'vuetify/directives';

const theme = useTheme();

function toggleDarkMode() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<style scoped>
.custom-btn {
  background-color: red !important;
  color: white;
  border-radius: 8px;
}
</style>
