<script setup lang="ts">
import { onMounted } from 'vue';
import { init } from './lib/Points';

onMounted(() => {
  init();
});

</script>

<template>
  <div class="greetings">
    <h3>Three Points</h3>
    <button @click="init" class="bg-amber-300 hover:bg-amber-700"> animate </button>

    <div class="w-full" id="three-container-points"></div>
  </div>

</template>


