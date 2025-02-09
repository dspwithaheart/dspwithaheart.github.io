<script setup lang="ts">
import Cube from '@/components/Cube.vue'
import Earth from '@/components/Earth.vue'
import Points from '@/components/Points.vue'
import WireFrame from '@/components/WireFrame.vue'
import MorphingSphere from '@/components/MorphingSphere.vue'
import { ref } from 'vue'
import { useLoginStore } from '@/stores/login'
import MagneticEffect from '@/components/common/MagneticEffect.vue'

const tabs: { [key: string]: any } = {
  Cube: Cube,
  Earth: Earth,
  Points: Points,
  WireFrame: WireFrame,
  MorphingSphere: MorphingSphere,
}

const loginStore = useLoginStore()


function setCurrentTab(tab: any) {
  loginStore.currentTab = tab
}
</script>

<template>
  <!-- <Nav /> -->
  <div class="relative container mx-auto gradientBackground">



    <component :is="tabs[loginStore.currentTab]"></component>
  </div>
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav button {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav button:first-of-type {
  border: 0;
}
</style>
