<script setup lang="ts">
import message from './composables/toast-message'

const onSuccessMessage = () => {
  message.success('This is a success message', 'Congratulations!')
}

const onWarningMessage = () => {
  message.warning('Warning message', 'This is a title', 5)
}

const onInfoMessage = () => {
  message.info('Info message')
}
</script>

<template>
  <div>
    <h1>Vue 3 + Vite + TypeScript</h1>
    <h2>Toast Message</h2>
    <div class="buttons">
      <button @click="onSuccessMessage">Success</button>
      <button @click="message.error('Error message')">Error</button>
      <button @click="onWarningMessage">Warning</button>
      <button @click="onInfoMessage">Info</button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  gap: 1em;
}
</style>
