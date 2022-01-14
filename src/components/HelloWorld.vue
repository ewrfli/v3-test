<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="test">{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>

</template>

<style scoped lang="scss">
.test {
  color: $test-color;
}

</style>
