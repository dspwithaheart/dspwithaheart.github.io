<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    class="z-[9999] scale-0 drop-shadow-lg"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-[9998] size-full select-none bg-black opacity-50"
    :class="{ hidden: !isNavbarOpen }"
  ></div>

  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="toggleBtnClickAnimation()"
    class="fixed right-0 top-0 z-[9998] h-full w-full translate-x-full select-none rounded-s-lg p-5 will-change-auto focus:outline-none max-md:w-[98%] sm:p-10 md:w-2/5 md:px-20 lg:w-1/5 bg-gradient-to-r from-zinc-950 from-5% via-black via-30% to-transparent to-90%"
  >
    <Circles id="circles" class="absolute right-0 top-0 opacity-25" />
    <div class="flex h-full flex-col items-center justify-between">
      <div class="relative z-[19] w-full">
        <ul class="heading-2 mt-12 font-bold text-stone-50 md:mt-24" id="navLinks">
          <li
            class="overflow-y-clip"
            v-for="(_, tab) in tabs"
            :key="tab"
            :class="['', { active: loginStore.currentTab === tab }]"
          >
            <a
              @click="
                (event) => {
                  setCurrentTab(tab)
                  toggleBtnClickAnimation()
                }
              "
              class="group my-2 flex h-full w-fit translate-y-full cursor-pointer items-center justify-start leading-none will-change-auto"
            >
              <span
                class="h-4 w-4 scale-0 rounded-full bg-stone-50 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="font-fancy -translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-5"
              >
                {{ tab }}
              </p>
            </a>
          </li>
        </ul>
      </div>
      <MagneticEffect divId="name-container" textId="name">
        <div id="name-container" class="group -m-10 h-fit cursor-pointer p-10">
          <h1
            id="name"
            class="font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl"
          >
            dspwithaheart
            <span
              class="font-fancy !inline !origin-center text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
              >&copy;</span
            >
          </h1>
        </div>
      </MagneticEffect>

      <div class="w-full">
        <div class="mt-2 h-full font-normal text-stone-50">
          <div class="mt-6 flex flex-wrap justify-start gap-1">
            <Button
              class="contact border border-stone-600 opacity-100"
              v-for="social in socialLinks"
              :key="social.label"
              :label="social.label"
              :url="social.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import { Link, BurgerMenuBtn } from '.'

import Circles from '../design/Circles.vue'
import { Button } from '../common'

import { animateNavbarEnter, animateNavbarLeave, navbarScale } from '@/animations'
import { navbarLinks, navLinks, socialLinks } from '@/data'
// import { lenis } from '@/main';

import Cube from '@/components/Cube.vue'
import Earth from '@/components/Earth.vue'
import Points from '@/components/Points.vue'
import WireFrame from '@/components/WireFrame.vue'
import MorphingSphere from '@/components/MorphingSphere.vue'
// import { ref } from 'vue'
import { useLoginStore } from '@/stores/login'
import MagneticEffect from '@/components/common/MagneticEffect.vue'

import About from '@/components/sections/About.vue'
import Carousel from '@/components/Carousel.vue'

const tabs: { [key: string]: any } = {
  About: About,

  Cube: Cube,
  Earth: Earth,
  Points: Points,
  WireFrame: WireFrame,
  MorphingSphere: MorphingSphere,
  Carousel: Carousel
}

const loginStore = useLoginStore()

function setCurrentTab(tab: any) {
  loginStore.currentTab = tab
}

const isNavbarOpen = ref(false)

const toggleBtnClickAnimation = () => {
  isNavbarOpen.value = !isNavbarOpen.value

  // animate the X on the button
  document.getElementById('magneto')?.classList.toggle('active')

  const x = document.getElementById('navbar') as HTMLDivElement
  if (isNavbarOpen.value) {
    animateNavbarEnter('#navbar', '#navLinks li a', '.contact')
    x.focus()
  } else {
    animateNavbarLeave('#navbar', '#navLinks li a', '.contact')
    x.blur()
  }
}

const gotoSection = (url: string) => {
  // lenis.start();
  // lenis.scrollTo(url, { duration: 3 });
  toggleBtnClickAnimation()
}

onMounted(() => {
  navbarScale('#burger', '#hero')
})

const emit = defineEmits(['isLocked'])
watch(isNavbarOpen, (newVal) => {
  emit('isLocked', newVal)
})
</script>
