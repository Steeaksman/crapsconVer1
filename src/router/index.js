import { createRouter, createWebHistory } from 'vue-router'

import CasinosAll from '../views/CasinosAll.vue'
import CasinoCraps from '../views/CasinoCraps.vue'
import scottsBrain from '../views/scottsBrain.vue'
import addscottsBrain from '../views/addscottsBrain.vue'
import opener from '../views/opener.vue'
import TripReports from '../views/TripReports.vue'
import addCasino from '../views/addCasino.vue'
import addTripReport from '../views/addTripReport.vue'
import addTableReport from '../views/addTableReport.vue'
import TableReports from '../views/TableReports.vue'

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
      path: '/scottsBrain',
      name: 'scottsBrain',
      component: scottsBrain
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
    },
    {
      path: '/addCasino',
      name: 'addCasino',
      component: addCasino
    },
    {
      path: '/addTripReport',
      name: 'addTripReport',
      component: addTripReport
    },
    {
      path: '/addTableReport',
      name: 'addTableReport',
      component: addTableReport
    },
    {
      path: '/TableReports',
      name: 'TableReports',
      component: TableReports
    },
    {
      path: '/addscottsBrain',
      name: 'addscottsBrain',
      component: addscottsBrain
    }
    
  ]
})

export default router
