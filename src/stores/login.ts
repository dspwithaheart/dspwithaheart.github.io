import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const currentView = ref<any>('DataPrep')
  const currentTab = ref<any>('home')
  const loggedin = ref<boolean>(false)

  const sessionTimeoutProgress = ref<string>('100%')
  const timeout = 60 * 60 * 1000
  const loginTime = Date.now()

  function login() {
    loggedin.value = true
  }

  async function initStore(): Promise<void> {
    // Initialize store with values from local storage
    console.debug('init store')
    let initState
    try {
      initState = localStorage.getItem('piniaState')
    } catch (error) {
      console.error(error)
    }
    if (initState) {
      const state = JSON.parse(initState)
      loggedin.value = state.login.loggedin
      currentView.value = state.login.currentView
      currentTab.value = state.login.currentTab
    }
  }

  initStore()

  setTimeout(() => {
    loggedin.value = false
    alert('Session timed out!')
  }, timeout)

  const calculateSessionTimeout = () => {
    if (!sessionTimeoutProgress.value.includes('-'))
      sessionTimeoutProgress.value = `${((((loginTime + timeout - Date.now()) / timeout) * 100) % 100).toFixed(2)}%`
  }

  return {
    currentView,
    currentTab,
    loggedin,
    sessionTimeoutProgress,
    login,
    calculateSessionTimeout,
  }
})
