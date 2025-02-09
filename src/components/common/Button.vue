<template>
  <component  :is="url ? 'a' : 'button'"
    @click="()=>{
      if (url) {
        gotoSection(url);
      }
    }"
    id="button"
    class="leading-base group pointer-events-auto relative h-full max-w-full transform-none overflow-clip px-5 py-2 text-[1rem] font-semibold uppercase tracking-normal text-stone-100 sm:text-sm"
    :class="$attrs.class"
    :href="url"
  >
    <span
      class="after:ease-expo flex-center relative z-20 overflow-hidden transition-all after:absolute after:left-0 after:inline-block after:will-change-auto after:translate-y-0 after:text-stone-200 after:transition-all after:duration-700 after:content-[attr(after)] group-hover:after:-translate-y-[100%]"
    >
      <span
        class="ease-expo text-nowrap font-fancy transition-all duration-700 group-hover:-translate-y-full"
        >{{ label }} </span
      >
    </span>
  </component :is="url ? 'a' : 'button'"">
</template>

<script setup lang="ts">
import { gotoSection } from '@/functions';

  defineProps({
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
    },
  });
</script>

<style scoped>
  .ease-expo {
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
</style>
