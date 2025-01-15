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

<!-- Lifecycle Hooks -->
<!-- <template>
  <div>
    <h3>Lifecycle Hooks Message</h3>
    <ul>
      <li v-for="(message, index) in lifecycleLog" :key="index">
        {{ message }}
      </li>
    </ul>
    <v-btn @click="triggerUpdate">Trigger Update</v-btn>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated } from 'vue'

const lifecycleLog = ref([])
let isManualUpdate = ref(false)

onBeforeMount(() => {
  lifecycleLog.value.push('Component is about to mount!')
})

onMounted(() => {
  lifecycleLog.value.push('Component is now mounted!')
})

onUpdated(() => {
  if (isManualUpdate) {
    lifecycleLog.value.push('Component has been updated!')
    isManualUpdate.value = false
  }
  isManualUpdate = false
})

function triggerUpdate() {
  isManualUpdate = true
  lifecycleLog.value.push('Triggering manual update...')
}
</script> -->
