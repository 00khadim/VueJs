import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'

const routes = [
  { path: '/', name: 'accueil', component: Accueil }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
