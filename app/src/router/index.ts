import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => ({ path: '/app'})
    },
    {
      path: '/app',
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
        {
          name: 'about',
          path: 'about',
          component: AboutView,
        }
      ]
    }
  ]
})

export default router
