<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Navbar } from './components/common'
import MagneticEffect from './components/common/MagneticEffect.vue'

import { useLoginStore } from './stores/login'
import { renderThree } from '@/components/lib/BackgroundShader'
import { onMounted } from 'vue'

onMounted(() => {
  renderThree()
})

const store = useLoginStore()
store.currentTab = "Github"
</script>

<template>
  <!-- <div class="w-full h-full background" id="three-container-background"></div> -->
  <div class="relative container w-full h-full mx-auto p-9">
    <MagneticEffect
      :magnetoStrengthVal="10"
      :magnetoTextStrengthVal="20"
      divId="name-container"
      textId="name"
    >
      <div
        id="name-container"
        class="group -m-10 h-fit cursor-pointer p-10"
        @click="store.currentTab = 'Github'"
      >
        <h1
          id="name"
          class="font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl gradientText"
        >
          dspwith<span
            class="gradientText font-fancy  text-3xl animate-pulse
              "
            >a</span
          >
heart
          <span
            class="gradientText font-fancy !inline !origin-center text-xl
            transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
            >&copy;</span
          >
        </h1>
      </div>
    </MagneticEffect>
    <Navbar @isLocked="true" />

    <RouterView />
  </div>
</template>

<style scoped>
@import 'tailwindcss';
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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.foreground {
  position: relative;
  z-index: 10; /* Higher z-index to stay on top */
  /* background-color: lightblue; */
  padding: 20px;
}

.background {
  /* color: #999999; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  /* background-color: lightblue; */
  /* height: 100%; */
}
</style>
