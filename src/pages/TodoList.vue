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
        <v-btn color="blue" @click="addTask" :disabled="!newTask.trim()"
          >Add Task
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="start" class="w-100">
      <v-col cols="12" md="12" lg="12" class="pl-0 ml-0">
        <v-list two-line>
          <template v-if="tasks.length">
            <v-list-item
              v-for="(task, index) in tasks"
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
                      'text-decoratiion-line-through text-muted':
                        task.completed,
                    }"
                  >
                    {{ task.text }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-btn
                  icon
                  color="error"
                  @click="removeTask(index)"
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
          Completed Tasks: <strong>{{ completedTasks }}</strong
          >/ {{ tasks.length }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
const tasks = ref([])
const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, completed: false })
    newTask.value = ''
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}

const completedTask = computed(
  () => tasks.value.filter((task) => task.completed).length
)
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
.text.muted {
  color: rgba(0, 0, 0, 0.6);
}

.v-list-item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 500px;
}
</style>
