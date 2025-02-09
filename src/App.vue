<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Navbar } from './components/common';
import MagneticEffect from './components/common/MagneticEffect.vue'
</script>

<template >
    <div class="relative container w-full h-full mx-auto">
      <MagneticEffect
        :magnetoStrengthVal="10"
        :magnetoTextStrengthVal="20"
        divId="name-container"
        textId="name"
      >
        <div id="name-container" class="group -m-10 h-fit cursor-pointer p-10">
          <h1
            id="name"
            class="font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl gradientText"
          >
            dspwithaheart
            <span
              class="gradientText font-fancy !inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
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
@import "tailwindcss";
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
</style>
