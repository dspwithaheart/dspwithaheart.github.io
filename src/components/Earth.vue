<script setup lang="ts">
import { onMounted } from 'vue';
import { renderEarth } from './lib/ThreeEarth';

onMounted(() => {
  renderEarth();
});

</script>

<template>
  <div class="greetings">
    <h3>Three EARTH</h3>
    <button @click="renderEarth" class="bg-amber-300 hover:bg-amber-700"> animate </button>

    <div class="w-full" id="three-container-earth"></div>
  </div>

</template>


