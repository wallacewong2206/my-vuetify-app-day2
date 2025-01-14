<!-- Introduction to v-model -->
<!-- <template>
  <v-text-field v-model="name" label="Your Name"></v-text-field>
  <p>Hello, {{ name }}</p>
</template>

<script setup>
const name = ref('')
</script> -->

<!-- Why use v-model -->
<!-- <template>
  <input :value="message" @input="updateMessage" />
  <p>Message is: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')

function updateMessage(event) {
  message.value = event.target.value
}
</script> -->

<!-- <template>
  <input v-model="message" />
  <p>Message is: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
</script> -->
