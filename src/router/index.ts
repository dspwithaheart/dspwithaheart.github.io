import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/earth',
      name: 'earth',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Earth.vue'),
    },
    {
      path: '/cube',
      name: 'cube',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Cube.vue'),
    },

    {
      path: '/points',
      name: 'points',

      component: () => import('../components/Points.vue'),
    },
    {
      path: '/wireframe',
      name: 'wireframe',

      component: () => import('../components/Wireframe.vue'),
    },

    {
      path: '/morphingsphere',
      name: 'morphingsphere',

      component: () => import('../components/MorphingSphere.vue'),
    },
  ],
})

export default router
