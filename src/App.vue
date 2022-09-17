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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1em;
}
</style>
