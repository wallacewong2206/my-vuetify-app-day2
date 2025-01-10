<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme">Change Theme</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <v-card class="mb-4" elevation="3">
              <v-card-title>
                <h3 class="text-h6">Sales Overview</h3>
              </v-card-title>
              <v-card-text>
                <div class="d-flex align-center">
                  <v-icon color="green">mdi-arrow-up-bold</v-icon>
                  <span class="ml-2">15% Increase</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <v-card class="mb-4" elevation="3">
              <v-card-title>
                <h3 class="text-h6">Customer Growth</h3>
              </v-card-title>
              <v-card-text>
                <div class="d-flex align-center">
                  <v-icon color="blue">mdi-account-plus</v-icon>
                  <span class="ml-2">10 New Customers</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <v-card class="mb-4" elevation="3">
              <v-card-title>
                <h3 class="text-h6">Website Traffic</h3>
              </v-card-title>
              <v-card-text>
                <div class="d-flex align-center">
                  <v-icon color="purple">mdi-web</v-icon>
                  <span class="ml-2">50k Visitors</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card elevation="3">
              <v-card-title>
                <h3 class="text-h6">Recent Orders</h3>
              </v-card-title>
              <v-card-text>
                <v-data-table
                  :headers="[
                    { text: 'Order ID', value: 'orderId' },
                    { text: 'Customer', value: 'customer' },
                    { text: 'Amount', value: 'amount' },
                    { text: 'Date', value: 'date' },
                  ]"
                  :items="[
                    {
                      orderId: 1,
                      customer: 'John Doe',
                      amount: '$100',
                      date: '2024-11-15',
                    },
                    {
                      orderId: 2,
                      customer: 'Jane Smith',
                      amount: '$50',
                      date: '2024-11-16',
                    },
                    {
                      orderId: 3,
                      customer: 'David Lee',
                      amount: '$150',
                      date: '2024-11-17',
                    },
                  ]"
                  :items-per-page="5"
                ></v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style>
.primary-button {
  background-color: #007bff; /* Primary button color */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.primary-button:hover {
  background-color: #0062cc; /* Hover effect */
}
</style>
