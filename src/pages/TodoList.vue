<template>
  <v-container>
    <v-row justify="start" class="mb-5">
      <v-col cols="12" md="12" lg="12">
        <h1 class="mb-3">To-Do-List</h1>
        <v-text-field
          v-model="newTask"
          label="Add a new task"
          outlined
          clearable
          class="mb-2"
        />
        <div>
          <v-btn color="blue" @click="addTask" :disabled="!newTask.trim()"
            >Add Task
          </v-btn>
          <v-btn color="red" @click="toggleCompletedVisibility" class="ml-2">
            {{ showCompleted ? 'Hide' : 'Show' }} Completed Tasks
          </v-btn>
          <v-snackbar
            v-model="snackbar.show"
            :timeout="snackbar.timeout"
            class="mt-2"
          >
            {{ snackbar.message }}
          </v-snackbar>
        </div>
      </v-col>
    </v-row>

    <v-row justify="start" class="w-100">
      <v-col cols="12" md="12" lg="12" class="pl-0 ml-0">
        <v-list two-line>
          <template v-if="tasks.length">
            <v-list-item
              v-for="(task, index) in filteredTasks"
              :key="index"
              class="align-center"
            >
              <v-row align="center" justify="space-between">
                <v-checkbox
                  v-model="task.completed"
                  hide-details
                  class="ml-1"
                  color="success"
                />
                <v-list-item-content>
                  <v-list-item-title
                    :class="{
                      'text-success': task.completed,
                    }"
                  >
                    {{ task.text }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-btn
                  icon
                  color="error"
                  @click="deleteTask(index)"
                  aria-label="Delete Task"
                  class="ma-4"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-row>
            </v-list-item>
          </template>

          <template v-else>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No task yet. Add one above!
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>

    <v-row justify="start" v-if="tasks.length">
      <v-col cols="12" md="12" lg="12" class="text-center">
        <v-divider class="my-3" />
        <p>
          Completed Tasks: <strong>{{ completedTask }}</strong
          >/ {{ tasks.length }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onBeforeMount, onMounted, onUpdated } from 'vue'

const newTask = ref('')
const tasks = ref([])
const showCompleted = ref(true)

const snackbar = ref({
  show: false,
  message: '',
  timeout: 5000,
})

const addTask = () => {
  tasks.value.push({ text: newTask.value, completed: false })
  newTask.value = ''
  showSnackbar('A new task has been added!')
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
  showSnackbar('A task has been deleted!')
}

const toggleCompletedVisibility = () => {
  showCompleted.value = !showCompleted.value
  showSnackbar(
    showCompleted.value ? 'Showing completed tasks' : 'Hiding completed tasks'
  )
}

const filteredTasks = computed(() => {
  return showCompleted.value
    ? tasks.value
    : tasks.value.filter((task) => !task.completed)
})

const showSnackbar = (message) => {
  snackbar.value.message = message
  snackbar.value.show = true
}

onBeforeMount(() => {
  tasks.value = [
    { text: 'Buy groceries', completed: false },
    { text: 'Walk the dog', completed: true },
    { text: 'Read a book', completed: false },
  ]
})

onMounted(() => {
  console.log('The app is fully loaded')
})

onUpdated(() => {
  console.log('Tasks have been updated')
})

const completedTask = computed(() => {
  return tasks.value.filter((task) => task.completed).length
})
</script>

<style scoped>
.text-success {
  color: green;
}
</style>
