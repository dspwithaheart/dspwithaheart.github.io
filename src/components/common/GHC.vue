<template>
  <!-- GitHub Repository Card Using Tailwind CSS -->
<div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <div class="p-5 flex items-center space-x-4">
    <!-- GitHub Icon SVG -->
    <svg class="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73
        1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.467-1.334-5.467-5.93
        0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.403
        c1.02.004 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222
        0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.097.823 2.21 0 1.594-.015 2.877-.015 3.273 0 .32.216.694.825.576C20.565 21.796 24
        17.297 24 12c0-6.627-5.373-12-12-12z" />
    </svg>

    <div>
      <h2 class="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
        <a href="https://github.com/username/repository" target="_blank" rel="noopener noreferrer">username/repository</a>
      </h2>
      <p class="mt-1 text-gray-600 text-sm">A short description of the GitHub repository goes here.</p>
    </div>
  </div>

  <div class="px-5 pb-5 flex justify-between text-gray-500 text-sm border-t border-gray-100">
    <div class="flex items-center space-x-2">
      <!-- Star Icon -->
      <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371
        1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54
        1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1
        1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
      <span>1.2k</span>
    </div>

    <div class="flex items-center space-x-2">
      <!-- Fork Icon -->
      <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1a3 3 0 013 3v3.09a5.5 5.5 0 012.5 9.91v3.5a3 3 0 11-2-2.83v-2.67a5.478
        5.478 0 01-3 .98h-.5a4 4 0 01-7 2.83 3 3 0 112-3.17v-3.16a5.5 5.5 0 014-9.83V4a3
        3 0 013-3z" />
      </svg>
      <span>230</span>
    </div>

    <div class="text-gray-400">
      Updated 3 days ago
    </div>
  </div>
</div>

</template>


<script setup lang="ts">
defineProps({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  headings: {
    type: Array as () => string[],
    required: true,
  },
  shape: {
    type: String,
    required: true,
  },
})
</script>


<style scoped>
  .ease-expo {
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
</style>
