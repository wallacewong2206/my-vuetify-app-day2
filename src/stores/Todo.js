import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  getters: {
    completedCount: (state) =>
      state.todos.filter((todo) => todo.completed).length,
  },
  actions: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false,
      })
    },
  },
})
