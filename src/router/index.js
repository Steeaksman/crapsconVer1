import { createRouter, createWebHistory } from 'vue-router'

import CasinosAll from '../views/CasinosAll.vue'
import CasinoCraps from '../views/CasinoCraps.vue'
import tester from '../views/tester.vue'
import opener from '../views/opener.vue'
import TripReports from '../views/TripReports.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'opener',
      component: opener
    },
    {
      path: '/crapslist',
      name: 'crapslist',
      component: CasinoCraps
    },
    {
      path: '/tester',
      name: 'tester',
      component: tester
    },
    {
      path: '/allcasinos',
      name: 'allcasinos',
      component: CasinosAll
    },
    {
      path: '/tripreports',
      name: 'tripreports',
      component: TripReports
    }
    
  ]
})

export default router
