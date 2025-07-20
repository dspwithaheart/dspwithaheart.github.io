<script setup lang="ts">
import { onMounted } from 'vue'
import { renderThree } from './lib/BackgroundShader'

onMounted(() => {
  renderThree()
})
</script>

<template>
  <div class="greetings">
    <h3>Three CUBE</h3>
    <!-- <button @click="renderThree" class="bg-amber-300 hover:bg-amber-700"> animate </button> -->

    <div class="w-full" id="three-container"></div>
  </div>
</template>
