<template>
  <v-list>
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
</template>

<script setup>
import { ref } from 'vue'
import TaskItem from '../components/TaskItem.vue'
import UserCard from '../components/UserCard.vue'
import RatingComponents from '@/components/RatingComponents.vue'

const tasks = ref(['Learn Vue', 'Build an app'])

const users = ref([
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'John Doe', email: 'john@example.com' },
])

const username = ref('')

const productRating = ref(0)
</script>
