<template>
  <!-- <v-card>
    <v-card-title>
      <slot name="title">Component Title</slot>
    </v-card-title>
    <v-card-text>
      <slot>Component Content</slot>
    </v-card-text>
  </v-card> -->

  <v-card>
    <v-card-title>
      <slot name="header">Custom Header</slot>
    </v-card-title>
    <v-card-subtitle>
      <slot name="subtitle">Custom Subtitle</slot>
    </v-card-subtitle>
    <v-card-text>
      <slot name="content">This is the main content of the card</slot>
    </v-card-text>
    <v-card-actions>
      <slot name="actions">ACTION BUTTON IN FOOTER</slot>
    </v-card-actions>
  </v-card>
</template>
