<template>
  <v-container>
    <v-row justify="start" class="mb-5">
      <v-col cols="12" md="12" lg="12">
        <h1 class="mb-3">To-Do-List</h1>
        <CustomInput
          v-model="newTask"
          label="Add a new task"
          class="mb-2"
          @added="focusInput"
          ref="inputField"
        />
        <div>
          <v-btn color="blue" @click="addTask" :disabled="!newTask.trim()"
            >Add Task</v-btn
          >
          <v-btn color="red" @click="toggleCompletedVisibility" class="ml-2">
            {{ showCompleted ? 'Hide' : 'Show' }} Completed Tasks
          </v-btn>
          <v-btn icon @click="toggleTheme" class="ml-2">
            <v-icon>{{
              isDarkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night'
            }}</v-icon>
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
            <TaskItem
              v-for="(task, index) in filteredTasks"
              :key="index"
              class="align-center"
              v-highlight="task.completed"
              :task="task"
              @remove="deleteTask(index)"
              @toggle="toggleTask(index)"
            >
            </TaskItem>
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
import { ref, computed, watch, onBeforeMount, onMounted, onUpdated } from 'vue'
import CustomInput from '../components/CustomInput.vue'
import TaskItem from '../components/TaskItem.vue'
import { useTheme } from 'vuetify'

const newTask = ref('')
const tasks = ref([])
const showCompleted = ref(true)
const inputField = ref(null)
const theme = useTheme()
const isDarkTheme = computed(() => theme.global.name.value === 'dark')

const snackbar = ref({
  show: false,
  message: '',
  timeout: 5000,
})

const addTask = () => {
  tasks.value.push({
    text: newTask.value,
    completed: false,
    priority: Math.floor(Math.random() * 3) + 1,
  })
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

watch(tasks, (newTasks, oldTasks) => {
  if (newTasks.length > oldTasks.length) {
    showSnackbar('A new task has been added!')
  }
})

onBeforeMount(() => {
  tasks.value = [
    { text: 'Buy groceries', completed: false, priority: 1 },
    { text: 'Walk the dog', completed: true, priority: 2 },
    { text: 'Read a book', completed: false, priority: 3 },
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
const toggleTask = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed
}

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.text-success {
  color: green;
}
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
