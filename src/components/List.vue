<template>
  <!-- Scoped Slots 1 -->
  <!-- <div v-for="item in items" :key="item.id">
    <slot :item="item">{{ item }}</slot>
  </div> -->

  <!-- Scoped Slots 2 -->
  <!-- <slot :items="items"></slot>
</template> -->

  <!-- Scoped Slots 3 Fruits -->
  <v-list>
    <v-list-item v-for="(item, index) in items" :key="index">
      <slot :item="item" :index="index">{{ item }}</slot>
    </v-list-item>
  </v-list>
</template>

<script setup>
// const items = [
//   { id: 1, name: 'Item 1', description: 'Description 1' },
//   { id: 2, name: 'Item 2', description: 'Description 2' },
// ]

defineProps({ items: Array })
</script>
