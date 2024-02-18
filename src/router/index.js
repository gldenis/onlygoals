import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home-auth',
      name: 'home-auth',
      component: () => import('@/pages/index-auth.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/pages/profile.vue')
    },
    {
      path: '/tariff',
      name: 'tariff',
      component: () => import('@/pages/tariff.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/pages/help.vue')
    }
  ]
})

export default router
