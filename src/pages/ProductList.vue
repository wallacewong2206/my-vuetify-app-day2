<!-- 3.3 Advanced State Management 22 Jan 2025, Wednesday -->
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card color="blue-grey-lighten-5" class="pa-4">
          <v-card-title
            class="text-h5 font-weight-bold primary--text justify-center"
          >
            Products
          </v-card-title>

          <v-card-text v-if="productStore.loading" class="text-center">
            Loading products...
          </v-card-text>
          <v-card-text v-else-if="productStore.error" class="text-center">
            {{ productStore.error }}
          </v-card-text>
          <v-list v-else>
            <v-list-item
              v-for="product in productStore.availableProducts"
              :key="product.id"
            >
              <v-list-item-title>
                {{ product.name }} - ${{ product.price }} (Stock:
                {{ product.stock }})
              </v-list-item-title>
              <v-btn
                color="primary"
                @click="addToCart(product.id)"
                :disabled="product.stock === 0"
              >
                Add to Cart
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="8">
        <v-card color="blue-grey-lighten-5" class="pa-4">
          <v-card-title
            class="text-h5 font-weight-bold primary--text justify-center"
          >
            Cart
          </v-card-title>

          <v-card-text>
            <v-list>
              <v-list-item
                v-for="item in cartStore.items"
                :key="item.productId"
              >
                <v-list-item-title>
                  Product ID: {{ item.productId }} | Quantity:
                  {{ item.quantity }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
            <p class="text-right mt-2">Total: ${{ cartStore.cartTotal }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'

const productStore = useProductStore()
const cartStore = useCartStore()

onMounted(() => {
  productStore.fetchProduct()
})

const addToCart = (productId) => {
  try {
    cartStore.addToCart(productId)
  } catch (error) {
    alert(error.message)
  }
}
</script>
