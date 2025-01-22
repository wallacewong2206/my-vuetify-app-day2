// 3.3 Advanced State Management 22 Jan 2025, Wednesday
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),
  getters: {
    availableProducts: (state) =>
      state.products.filter((product) => product.stock > 0),
  },
  actions: {
    async fetchProduct() {
      this.loading = true
      try {
        // Mocking the API call
        await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

        const mockedProducts = [
          { id: 1, name: 'Laptop', price: 999, stock: 5 },
          { id: 2, name: 'Phone', price: 699, stock: 10 },
          { id: 3, name: 'Tablet', price: 499, stock: 0 },
        ]
        this.products = mockedProducts
      } catch (error) {
        this.error = 'Failed to load products'
      } finally {
        this.loading = false
      }
    },
  },
})
