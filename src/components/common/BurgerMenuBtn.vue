<template>
  <MagneticEffect divId="magneto" textId="magnetoText">
    <div v-bind="$attrs" class="fixed right-7 top-7 z-[20]">
      <div
        id="magneto"
        class="flex items-center size-10 cursor-pointer rounded-full bg-stone-200 brightness-90 ease-in-out lg:size-[4.5rem] radialBackground"
      >
        <h1 class="w-full before:bg-cyan-950 after:bg-black" id="magnetoText"></h1>
      </div>
    </div>
  </MagneticEffect>
</template>

<script setup lang="ts">
import MagneticEffect from './MagneticEffect.vue'
</script>

<style scoped>
#magnetoText::before,
#magnetoText::after {
  width: 40%;
  content: ' ';
  display: block;
  height: 1px;
  position: relative;
  margin: auto;
  transition: all 0.3s ease-in-out;
}

#magnetoText::before {
  top: 5px;
}

#magnetoText::after {
  top: -5px;
}

.active #magnetoText::before {
  transform: rotate(-45deg);
  top: 0px;
}

.active #magnetoText::after {
  transform: rotate(45deg);
  top: -1px;
}
</style>
