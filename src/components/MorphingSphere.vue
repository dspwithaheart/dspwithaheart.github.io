<script setup lang="ts">
import { onMounted } from 'vue'
import { init } from './lib/MorphingSphere'

onMounted(() => {
  init()
})
</script>

<template>
  <div class="greetings">
    <h3>Three Morph</h3>
    <!-- <button @click="init" class="bg-amber-300 hover:bg-amber-700">animate</button> -->

    <div class="w-full" id="three-container-morphingsphere"></div>
  </div>
</template>
