<script setup lang="ts">
import { onMounted } from 'vue'
import GithubCard from '@/components/common/GithubCard.vue'
import type { GithubProject } from '@/types/GithubApi'
import GithubCard2 from '../common/GithubCard2.vue'

const fetchGithubProjects = async (username: string) => {

  const queryParams = new URLSearchParams({
    q: `user:${username}`,
    user: username,
    type: 'Repositories',
  })

  const url = `https://api.github.com/search/repositories?${queryParams}`
  const repoResponse = await fetch(url, {
    headers: { 'Content-Type': 'application/vnd.github.v3+json' },
  })
  const repoData = await repoResponse.json()
  console.log(repoData.items)
  return repoData.items as GithubProject[]
}

const githubProjects: GithubProject[]
  = await fetchGithubProjects('dspwithaheart')

// onMounted( async () => {
//   githubProjects = await fetchGithubProjects('dspwithaheart')
//   console.log(githubProjects)
// })

</script>

<template>


  <div v-if="githubProjects" class="mt-20">
    <h3 class="p-2">GitHub

      {{ githubProjects.length }} repositories
    </h3>
    <div class="flex flex-wrap w-full ">
      <div v-for="(project, index) in githubProjects" :key="index" class="flex align-middle p-2 ">
        <!-- Index: {{ index }} -->

        <GithubCard2 :gitthubProject="project" />

      </div>
    </div>
  </div>
  <h1 v-else>GITHUB API Error</h1>
</template>



<!-- <template>
  <div class="col-span-1 lg:col-span-2">
    <div class="card bg-base-200 shadow-xl border border-base-300">
      <div class="card-body p-8">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div class="flex items-center space-x-3">
            <div v-if="loading">
              <Skeleton widthCls="w-12" heightCls="h-12" className="rounded-xl" />
            </div>
            <div v-else class="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <AiOutlineGithub class="text-2xl" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-base sm:text-lg font-bold text-base-content truncate">
                <template v-if="loading">
                  <Skeleton widthCls="w-48" heightCls="h-8" />
                </template>
                <template v-else>{{ header }}</template>
              </h3>
              <div class="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                <template v-if="loading">
                  <Skeleton widthCls="w-32" heightCls="h-4" />
                </template>
                <template v-else>
                  Showcasing {{ githubProjects.length }} featured repositories
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <template v-if="loading">
            <SkeletonCard v-for="index in limit" :key="index" />
          </template>
          <template v-else>
            <ProjectCard
              v-for="(item, index) in githubProjects"
              :key="index"
              :project="item"
              :googleAnalyticsId="googleAnalyticsId"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template> -->

<!-- <script lang="ts">
import { defineComponent } from 'vue';
import { AiOutlineFork, AiOutlineStar, AiOutlineGithub } from 'vue-icons/ai';
import { MdInsertLink } from 'vue-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import Skeleton from './Skeleton.vue';
import ProjectCard from './ProjectCard.vue';

export default defineComponent({
  name: 'GithubProjectCard',
  props: {
    header: String,
    githubProjects: Array,
    loading: Boolean,
    limit: Number,
    googleAnalyticsId: {
      type: String,
      required: false,
    },
  },
  components: {
    AiOutlineFork,
    AiOutlineStar,
    AiOutlineGithub,
    MdInsertLink,
    Skeleton,
    ProjectCard,
  },
});
</script> -->

<style scoped>
/* Add any specific styles if needed */
</style>
