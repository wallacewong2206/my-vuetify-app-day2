<template>
  <!-- <v-list>
    <TaskItem v-for="task in tasks" :key="task" :task="task" />
  </v-list>

  <v-list>
    <UserCard v-for="user in users" :key="name" :user="user" />
  </v-list>

  <CustomInput v-model="username" label="Username" />
  <p>Entered username: {{ username }}</p>

  <div>
    <h2>Rating this product</h2>
    <RatingComponents v-model="productRating" :maxRating="5" />
    <p>Current rating: {{ productRating }}</p>
  </div>

      <Card>
      <template #header>{{ item.name }}</template>
      <p #content>{{ item.description }}</p>
    </Card> -->

  <!-- Basic Slots, Card -->
  <Card>
    <template #header><h2>Page Title</h2></template>
    <p #content>Page Content</p>
    <template #actions>Footer</template>
  </Card>

  <!-- Scoped Slots 1 -->
  <!-- <List>
    <template #default="{ item }">
      <v-card class="ma-5 w-25">
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </v-card>
    </template>
  </List> -->

  <!-- Scoped Slots 2 -->
  <!-- <List>
    <template #default="{ items }">
      <div v-for="item in items" :key="item.id">
        <v-card class="ma-5 w-25">
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-text>
            {{ item.description }}
          </v-card-text>
        </v-card>
      </div>
    </template>
  </List> -->

  <!-- Scoped Slots 3 Fruits -->
  <!-- <List :items="fruits">
    <template v-slot="{ item, index }">
      <v-card class="ma-5 w-25">
        <v-card-title>{{ index + 1 }}. {{ item.toUpperCase() }}</v-card-title>
        <v-card-text>
          This is a delicious {{ item.toLowerCase() }}.
        </v-card-text>
      </v-card>
    </template>
  </List> -->

  <!-- Render Functions -->
  <!-- <RenderComponent title="My Title">This is the content</RenderComponent> -->

  <!-- Render Function Exercise -->
  <div class="ma-5">
    <RenderComponent :level="2" class="text-blue">
      This is an h2 heading
    </RenderComponent>
    <RenderComponent :level="4" class="text-secondary">
      This is an h4 heading
    </RenderComponent>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// import TaskItem from '../components/TaskItem.vue'
// import UserCard from '../components/UserCard.vue'
// import RatingComponents from '@/components/RatingComponents.vue'
// import CustomInput from '@/components/CustomInput.vue'
// // Basic Slots, Card
// import Card from '../components/Card.vue'
// import { id } from 'vuetify/locale'
// // Scoped Slots
// import List from '../components/List.vue'
// Render Functions
import RenderComponent from '../components/RenderComponents.vue'
//
// const fruits = ['Apple', 'Banana', 'Cherry']
//
// const tasks = ref(['Learn Vue', 'Build an app'])
//
// const users = ref([
//   { name: 'John Doe', email: 'john@example.com' },
//   { name: 'John Doe', email: 'john@example.com' },
// ])
//
// const username = ref('')
// const productRating = ref(0)
</script>
