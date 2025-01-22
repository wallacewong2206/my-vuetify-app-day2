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
          <template v-if="todos.length">
            <TaskItem
              v-for="(todo, index) in filteredTodos"
              :key="index"
              class="align-center"
              v-highlight="todo.completed"
            >
              <v-row align="center" justify="space-between">
                <v-checkbox
                  v-model="todo.completed"
                  hide-details
                  class="ml-1"
                  color="success"
                />
                <v-list-item-content>
                  <v-list-item-title>
                    {{ todo.text }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-btn icon @click="deleteTodo(index)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </v-row>
            </TaskItem>
          </template>
        </v-list>
      </v-col>
    </v-row>

    <v-row justify="start" v-if="todos.length">
      <v-col cols="12" md="12" lg="12" class="text-center">
        <v-divider class="my-3" />
        <p>
          Completed Tasks: <strong>{{ completedTodosCount }}</strong
          >/ {{ todos.length }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, watch, onBeforeMount, onMounted, onUpdated } from 'vue'
import { useTodoStore } from '../stores/TodoStore'
import CustomInput from '../components/CustomInput.vue'
import TaskItem from '../components/TaskItem.vue'
import highlight from '../directives/highlight.js'
import taskPriority from '../plugins/taskPriority.js'

const newTask = ref('')
const showCompleted = ref(true)
const inputField = ref(null)
const snackbar = ref({
  show: false,
  message: '',
  timeout: 5000,
})

const todoStore = useTodoStore()
const { todos, completedTodosCount, addTodo } = todoStore

const addTask = () => {
  addTodo(newTask.value)
  newTask.value = ''
  showSnackbar('A new task has been added!')
}

const deleteTodo = (index) => {
  todos.splice(index, 1)
  showSnackbar('A task has been deleted!')
}

const toggleCompletedVisibility = () => {
  showCompleted.value = !showCompleted.value
  showSnackbar(
    showCompleted.value ? 'Showing completed tasks' : 'Hiding completed tasks'
  )
}

const filteredTodos = computed(() => {
  return showCompleted.value ? todos : todos.filter((todo) => !todo.completed)
})

const showSnackbar = (message) => {
  snackbar.value.message = message
  snackbar.value.show = true
}

watch(todos, (newTodos, oldTodos) => {
  if (newTodos.length > oldTodos.length) {
    showSnackbar('A new task has been added!')
  }
})

onBeforeMount(() => {
  todoStore.todos = [
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
</script>

<style scoped>
.text-success {
  color: green;
}
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
