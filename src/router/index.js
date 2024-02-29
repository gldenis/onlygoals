import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        bodyClass: 'home'
      },
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
      meta: {
        bodyClass: 'profile'
      },
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
    },
    {
      path: '/macros',
      name: 'macros',
      component: () => import('@/pages/macros.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      meta: {
        layout: 'empty',
        bodyClass: 'landing'
      },
      component: () => import('@/pages/landing.vue')
    },
    {
      path: '/dev',
      name: 'dev',
      component: () => import('@/pages/dev.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to?.meta.bodyClass) {
    document.querySelector('body').classList.add(to?.meta.bodyClass)
  }

  if (from?.meta.bodyClass) {
    document.querySelector('body').classList.remove(from?.meta.bodyClass)
  }

  next()
})


export default router
