<template>
  <div class="min-w-sm max-w-lg rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700
 hover:bg-gradient-to-t from-gray-800/30 via-blue-800/20 to-gray-800/10 transition-all duration-300 ease-in-out
 transition duration-500 hover:scale-105
    ">
    <!-- <img class="w-full h-48 object-cover" src="https://source.unsplash.com/random/400x200" alt="Project image"> -->
    <div class="px-6 py-4">


      <div class="font-bold text-xl mb-2 text-gray-900 dark:text-white">{{ gitthubProject?.name }}</div>
      <p class="text-gray-700 dark:text-gray-300 text-base">{{ gitthubProject?.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-blue-200 dark:bg-blue-700/10 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-100 mr-2 mb-2">
        <div class="flex items-center space-x-2">
          <!-- Star Icon -->
          <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371
        1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54
        1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1
        1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
          <span>{{ gitthubProject?.stargazers_count }}</span>
        </div>


      </span>

      <span
        class="inline-block bg-green-200 dark:bg-green-700/10 rounded-full px-3 py-1 text-sm font-semibold text-green-800 dark:text-green-100 mr-2 mb-2">
        <div class="flex items-center space-x-2">
          <!-- Fork Icon -->

          <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
                fill="#ffffff"></path>
            </g>
          </svg>
          <span>{{ gitthubProject?.forks_count }}</span>
        </div>


      </span>
      <span
        class="inline-block bg-gray-200 dark:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-300 mr-2 mb-2">

        {{ gitthubProject?.language }}
      </span>
      <div class="flex items-center space-x-2">
        <!-- Update Icon -->

        <svg class="w-4 h-4 text-gray-500" fill="currentColor" version="1.1" id="Capa_1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 420.827 420.827"
          xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M210.29,0C156,0,104.43,20.693,65.077,58.269C25.859,95.715,2.794,146.022,0.134,199.921 c-0.135,2.734,0.857,5.404,2.744,7.388c1.889,1.983,4.507,3.105,7.244,3.105h45.211c5.275,0,9.644-4.098,9.979-9.362 c4.871-76.214,68.553-135.914,144.979-135.914c80.105,0,145.275,65.171,145.275,145.276c0,80.105-65.17,145.276-145.275,145.276 c-18.109,0-35.772-3.287-52.501-9.771l17.366-15.425c2.686-2.354,3.912-5.964,3.217-9.468c-0.696-3.506-3.209-6.371-6.592-7.521 l-113-32.552c-3.387-1.149-7.122-0.407-9.81,1.948c-2.686,2.354-3.913,5.963-3.218,9.467L69.71,403.157 c0.696,3.505,3.209,6.372,6.591,7.521c3.383,1.147,7.122,0.408,9.81-1.946l18.599-16.298 c31.946,18.574,68.456,28.394,105.581,28.394c116.021,0,210.414-94.392,210.414-210.414C420.705,94.391,326.312,0,210.29,0z">
                </path>
                <path
                  d="M195.112,237.9h118.5c2.757,0,5-2.242,5-5v-30c0-2.757-2.243-5-5-5h-83.5v-91c0-2.757-2.243-5-5-5h-30 c-2.757,0-5,2.243-5,5v126C190.112,235.658,192.355,237.9,195.112,237.9z">
                </path>
              </g>
            </g>
          </g>
        </svg>

        <span>{{ gitthubProject?.updated_at }}</span>
      </div>


    </div>
    <div class="px-6 pb-4">

      <a v-bind:href="gitthubProject?.html_url" target="_blank"
        class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600 font-semibold">View
        on GitHub </a>
    </div>

    <svg class="absolute place-self-end m-4 w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24"
      aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73
        1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.467-1.334-5.467-5.93
        0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.403
        c1.02.004 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222
        0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.097.823 2.21 0 1.594-.015 2.877-.015 3.273 0 .32.216.694.825.576C20.565 21.796 24
        17.297 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  </div>


</template>


<script setup lang="ts">


import type { GithubProject } from '@/types/GithubApi'
defineProps({
  gitthubProject: {
    type: Object as () => GithubProject,
    required: false
  },
})
</script>


<style scoped>
.ease-expo {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
