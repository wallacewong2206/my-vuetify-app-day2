<template>
  <v-app>
    <v-container>
        <div class="text-h4 font-weight-bold text-center pa-4">Vuetify Hands-on Exercise</div>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="elevation-2">
            <v-card-title class="text-h5">Card 1</v-card-title>
            <v-card-subtitle class="test-body">This is a simple card.</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="elevation-2">
            <v-card-title class="text-h5">Card 2</v-card-title>
            <v-card-subtitle class="test-body">Styled with Vuetify classes.</v-card-subtitle>
            </v-card>
          </v-col>
          </v-row>

          <div class="bg-primary text-white pa-4 text-center mt-4">This is a primary colored container with padding</div>

          <div class="text-center text-h4 elevation-3 pa-3 mt-4">Stylish Heading with Shadow</div>
          <div class="rounded-lg border border-primary pa-3 opacity-75 mt-4 text-center">Rounded Border with Opacity</div>
        </v-container>
   </v-app>
</template>