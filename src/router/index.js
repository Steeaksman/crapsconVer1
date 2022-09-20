import { createRouter, createWebHistory } from 'vue-router'

import ViewNotes from '../views/ViewNotes.vue'
import ViewStats from '../views/ViewStats.vue'
import tester from '../views/tester.vue'
import opener from '../views/opener.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'opener',
      component: opener
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats
    },
    {
      path: '/tester',
      name: 'tester',
      component: tester
    },
    {
      path: '/notes',
      name: 'notes',
      component: ViewNotes
    }
    
  ]
})

export default router
