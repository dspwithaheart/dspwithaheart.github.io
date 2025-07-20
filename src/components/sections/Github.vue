<script setup lang="ts">

interface GithubProject {
  name: string
  html_url: string
  description: string
  stargazers_count: string
  forks_count: string
  language: string
}

const ghp = async (username: string) => {

  const queryParams = new URLSearchParams({
    q: `user:${username}`,
    user: username,
    type: 'Repositories',
  })

  const url = `https://api.github.com/search/repositories?${queryParams}` //q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;
  const repoResponse = await fetch(url, {
    headers: { 'Content-Type': 'application/vnd.github.v3+json' },
  })
  const repoData = await repoResponse.json()
  console.log(repoData.items)
  return repoData.items as GithubProject[]
}

// const githubProjects = await ghp('dspwithaheart')
// console.log(githubProjects)

</script>

<template>
  <div class="greetings">
    <h3>GitHub</h3>
    <!-- <button @click="renderThree" class="bg-amber-300 hover:bg-amber-700"> animate </button> -->

  </div>
</template>
