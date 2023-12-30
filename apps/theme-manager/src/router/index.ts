import { createRouter, createWebHistory } from 'vue-router'
import rummyView from '@/components/rummyView.vue'
import eightsView from '@/components/eightsView.vue'
import warView from '@/components/warView.vue'

// Composables
// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { RouteRecordRaw } from 'vue-router'

// import { useAppStore } from '@/store/app'
// : Array<RouteRecordRaw>
const routes = [
  {
    path: '/games',
    component: () => import('../views/CardsView.vue'),
    children: [
      {
        path: 'rummy',
        name: 'cards.rummy',
        component: rummyView
      },
      {
        path: 'eights',
        name: 'cards.eights',
        component: eightsView
      },
      {
        path: 'war',
        name: 'cards.war',
        component: warView
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage.themes',
    component: () => import('@/views/ThemeManagerView.vue')
  }
]


// history: createWebHistory(process.env.BASE_URL),
// console.log({baseUrl: import.meta.env.BASE_URL})
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})





export default router
